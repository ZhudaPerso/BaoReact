// Node 18+ 自带 fetch
import fs from "node:fs/promises";
import path from "node:path";
import "dotenv/config";

const PLACE_ID = process.env.PLACE_ID; // 例：ChIJxxxxxxxxxxxxxxxx
const API_KEY = process.env.CLOUD_API; // 你的 Google API Key
if (!PLACE_ID || !API_KEY) {
	console.error("Missing PLACE_ID or CLOUD_API");
	process.exit(1);
}

const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
const res = await fetch(url, {
	headers: {
		"X-Goog-Api-Key": API_KEY,
		"X-Goog-FieldMask": "rating,userRatingCount",
	},
});
if (!res.ok) {
	console.error("Places API error:", res.status, await res.text());
	process.exit(1);
}
const data = await res.json();
const rating = data.rating;
const count = data.userRatingCount;

const file = path.join(process.cwd(), "src", "rating-schema.json");
const raw = await fs.readFile(file, "utf8");
const json = JSON.parse(raw);

// 只更新评分相关字段，其他信息保持不动
json.aggregateRating = {
	"@type": "AggregateRating",
	ratingValue: String(rating),
	reviewCount: String(count),
};

await fs.writeFile(file, JSON.stringify(json, null, 2), "utf8");
console.log(`Updated rating-schema.json → rating=${rating}, count=${count}`);
