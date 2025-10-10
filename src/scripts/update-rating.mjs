// scripts/update-rating.mjs
// Node 18+ 自带 fetch
import fs from "node:fs/promises";
import path from "node:path";
import "dotenv/config";

const PLACE_ID = process.env.PLACE_ID; // 例：ChIJxxxxxxxxxxxxxxxx
const API_KEY = process.env.CLOUD_API; // 你的 Google API Key（你在 Netlify 中配置的 CLOUD_API）
if (!PLACE_ID || !API_KEY) {
	console.error("[update-rating] Missing PLACE_ID or CLOUD_API");
	process.exit(1);
}

// ---------- 1) 拉取最新评分（Places API New） ----------
const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
const res = await fetch(url, {
	headers: {
		"X-Goog-Api-Key": API_KEY,
		"X-Goog-FieldMask": "rating,userRatingCount",
	},
});
if (!res.ok) {
	console.error(
		"[update-rating] Places API error:",
		res.status,
		await res.text()
	);
	process.exit(1);
}
const data = await res.json();
const rating = data?.rating ?? null;
const count = data?.userRatingCount ?? null;

if (rating == null || count == null) {
	console.error("[update-rating] Missing rating or userRatingCount:", data);
	process.exit(1);
}
console.log(`[update-rating] Fetched rating=${rating}, count=${count}`);

// ---------- 2) 更新本地 schema JSON（方便人工查看/版本管理） ----------
const root = process.cwd();
const schemaPath = path.join(root, "src", "rating-schema.json");

let base;
try {
	const raw = await fs.readFile(schemaPath, "utf8");
	base = JSON.parse(raw);
} catch {
	base = {
		"@context": "https://schema.org",
		"@type": "BeautySalon",
		name: "BAO BEAUTÉ",
		url: "https://baobeaute.fr",
	};
}

if (!base.telephone) {
	base.telephone = "+33 7 66 35 04 87";
}
if (!base.priceRange) {
	base.priceRange = "€€";
}

base.aggregateRating = {
	"@type": "AggregateRating",
	ratingValue: String(rating),
	reviewCount: String(count),
};

await fs.writeFile(schemaPath, JSON.stringify(base, null, 2), "utf8");
console.log(
	`[update-rating] Wrote schema → ${path.relative(root, schemaPath)}`
);

// ---------- 3) 将 JSON-LD 直接内联到 index.html ----------
const indexPath = path.join(root, "index.html");
let html = await fs.readFile(indexPath, "utf8");

// 移除任何外链 JSON-LD（Google 不会解析外链）
html = html.replace(
	/<script[^>]*type=["']application\/ld\+json["'][^>]*src=["'][^"']*rating-schema\.json["'][^>]*>\s*<\/script>\s*/gi,
	""
);

// 新的内联块
const jsonld = JSON.stringify(base, null, 2);
const inlineBlock = `<script type="application/ld+json" id="ldjson-aggregate-rating">\n${jsonld}\n</script>`;

// 若已有同 id 的脚本则替换，否则在 </head> 前插入
const reExisting =
	/<script[^>]*type=["']application\/ld\+json["'][^>]*id=["']ldjson-aggregate-rating["'][^>]*>[\s\S]*?<\/script>/i;

if (reExisting.test(html)) {
	html = html.replace(reExisting, inlineBlock);
	console.log("[update-rating] Replaced existing inline JSON-LD in index.html");
} else if (html.includes("</head>")) {
	html = html.replace("</head>", `${inlineBlock}\n</head>`);
	console.log(
		"[update-rating] Injected inline JSON-LD before </head> in index.html"
	);
} else {
	html += `\n${inlineBlock}\n`;
	console.warn(
		"[update-rating] </head> not found, appended JSON-LD at file end."
	);
}

await fs.writeFile(indexPath, html, "utf8");
console.log(
	`[update-rating] Updated ${path.relative(
		root,
		indexPath
	)} with inline JSON-LD`
);
