import "dotenv/config";

// 触发 Deploy Hook 的简单函数
export default async () => {
	const hook = process.env.DEPLOY_HOOK_URL; // 在 Netlify env 设置
	if (!hook) return new Response("Missing DEPLOY_HOOK_URL", { status: 500 });

	const r = await fetch(hook, { method: "POST" });
	const ok = r.ok ? "OK" : `ERR ${r.status}`;
	return new Response(`Triggered build: ${ok}`);
};
