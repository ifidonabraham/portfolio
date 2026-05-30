/**
 * Verifies hero 3D: GLB loads + canvas exists + rotation changes over time.
 * Run: node scripts/verify-hero-3d.mjs [port]
 */
import { chromium } from "playwright"

const port = process.argv[2] || "3000"
const base = `http://localhost:${port}`

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--use-angle=swiftshader", "--enable-webgl"],
  })
  const page = await browser.newPage()

  const glbRes = await fetch(`${base}/models/night_sky_visible_spectrum_monochromatic.glb`, {
    method: "HEAD",
  })
  if (!glbRes.ok) {
    throw new Error(`GLB not reachable (HTTP ${glbRes.status}) at ${base}`)
  }
  console.log("OK: GLB file served")

  await page.goto(base, { waitUntil: "domcontentloaded", timeout: 180000 })
  await page.waitForFunction(
    () => typeof window.__heroGlobeRotationY === "number",
    { timeout: 120000 }
  )
  const canvasCount = await page.locator("canvas").count()
  if (canvasCount === 0) {
    throw new Error("No <canvas> found on page")
  }
  console.log("OK: Hero canvas + globe mounted")

  const rotationDelta = await page.evaluate(async () => {
    const readY = () => window.__heroGlobeRotationY
    await new Promise((r) => setTimeout(r, 500))
    const r0 = readY()
    if (r0 === undefined) return { error: "globe not mounted yet" }
    await new Promise((r) => setTimeout(r, 1500))
    const r1 = readY()
    return { r0, r1, delta: Math.abs((r1 ?? 0) - (r0 ?? 0)) }
  })

  if (rotationDelta.error) {
    console.warn("WARN: Could not read Three.js rotation via R3F:", rotationDelta.error)
    console.log("Manual check: open", base, "and watch the red globe spin.")
  } else if (rotationDelta.delta > 0.001) {
    console.log("OK: Model rotation detected (delta y:", rotationDelta.delta.toFixed(4), ")")
  } else {
    throw new Error(
      `Rotation did not change (y0=${rotationDelta.r0}, y1=${rotationDelta.r1}). Globe may be static.`
    )
  }

  await browser.close()
  console.log("All checks passed on", base)
}

main().catch((err) => {
  console.error("FAIL:", err.message)
  process.exit(1)
})
