import { existsSync } from "fs"
import { promises as fs } from "fs"
import path from "path"

export type PortfolioReview = {
  id: string
  name: string
  rating: number
  comment: string
  createdAt: string
}

export type RatingsDatabase = {
  reviews: PortfolioReview[]
}

function findProjectRoot(): string {
  let dir = process.cwd()

  for (let i = 0; i < 6; i++) {
    const pkg = path.join(dir, "package.json")
    const dataDir = path.join(dir, "data")
    if (existsSync(pkg) && existsSync(dataDir)) {
      return dir
    }
    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
  }

  return process.cwd()
}

function getRatingsFilePath(): string {
  // Vercel/serverless: project files are read-only; use writable /tmp
  if (process.env.VERCEL === "1") {
    return "/tmp/portfolio-ratings.json"
  }

  return path.join(findProjectRoot(), "data", "ratings.json")
}

const RATINGS_FILE = getRatingsFilePath()

export function getRatingsStoragePath(): string {
  return RATINGS_FILE
}

export async function readRatings(): Promise<RatingsDatabase> {
  try {
    const raw = await fs.readFile(RATINGS_FILE, "utf-8")
    const parsed = JSON.parse(raw) as RatingsDatabase
    if (!Array.isArray(parsed.reviews)) {
      return { reviews: [] }
    }
    return parsed
  } catch {
    // On Vercel first run, seed from bundled project file if present
    if (process.env.VERCEL === "1") {
      try {
        const bundled = path.join(findProjectRoot(), "data", "ratings.json")
        const raw = await fs.readFile(bundled, "utf-8")
        const parsed = JSON.parse(raw) as RatingsDatabase
        if (Array.isArray(parsed.reviews)) {
          await writeRatings(parsed)
          return parsed
        }
      } catch {
        // ignore
      }
    }
    return { reviews: [] }
  }
}

export async function writeRatings(data: RatingsDatabase): Promise<void> {
  await fs.mkdir(path.dirname(RATINGS_FILE), { recursive: true })
  await fs.writeFile(RATINGS_FILE, JSON.stringify(data, null, 2), "utf-8")
}

export async function addReview(
  input: Omit<PortfolioReview, "id" | "createdAt">
): Promise<PortfolioReview> {
  const db = await readRatings()
  const review: PortfolioReview = {
    id: globalThis.crypto.randomUUID(),
    name: input.name.trim(),
    rating: input.rating,
    comment: input.comment.trim(),
    createdAt: new Date().toISOString(),
  }
  db.reviews.unshift(review)
  await writeRatings(db)
  return review
}

export function getRatingSummary(reviews: PortfolioReview[]) {
  if (reviews.length === 0) {
    return {
      average: 0,
      total: 0,
      distribution: [0, 0, 0, 0, 0] as [number, number, number, number, number],
    }
  }

  const distribution: [number, number, number, number, number] = [0, 0, 0, 0, 0]
  let sum = 0

  for (const review of reviews) {
    const star = Math.min(5, Math.max(1, Math.round(review.rating)))
    distribution[star - 1] += 1
    sum += star
  }

  return {
    average: sum / reviews.length,
    total: reviews.length,
    distribution,
  }
}
