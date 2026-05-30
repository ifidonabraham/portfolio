import { chromium } from "playwright"

const port = process.argv[2] || "3006"
const base = `http://localhost:${port}`

const browser = await chromium.launch({
  headless: true,
  args: ["--use-angle=swiftshader", "--enable-webgl"],
})
const page = await browser.newPage()
const logs = []
page.on("console", (m) => logs.push(`[${m.type()}] ${m.text()}`))
page.on("pageerror", (e) => logs.push(`[pageerror] ${e.message}`))

await page.goto(base, { waitUntil: "domcontentloaded", timeout: 180000 })
await page.waitForTimeout(45000)

const fetchInfo = await page.evaluate(async () => {
  const start = performance.now()
  try {
    const res = await fetch("/models/night_sky_visible_spectrum_monochromatic.glb")
    const buf = await res.arrayBuffer()
    return {
      ok: res.ok,
      status: res.status,
      bytes: buf.byteLength,
      ms: Math.round(performance.now() - start),
    }
  } catch (e) {
    return { error: String(e) }
  }
})

const info = await page.evaluate(() => ({
  canvas: document.querySelectorAll("canvas").length,
  rotation: window.__heroGlobeRotationY,
}))

console.log("GLB fetch:", fetchInfo)
console.log("Page state:", info)
logs.filter((l) => /glb|gltf|Hero|error|webgl/i.test(l)).forEach((l) => console.log(l))
await browser.close()
