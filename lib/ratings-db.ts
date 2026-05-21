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

const RATINGS_FILE = path.join(process.cwd(), "data", "ratings.json")

export async function readRatings(): Promise<RatingsDatabase> {
  try {
    const raw = await fs.readFile(RATINGS_FILE, "utf-8")
    const parsed = JSON.parse(raw) as RatingsDatabase
    if (!Array.isArray(parsed.reviews)) {
      return { reviews: [] }
    }
    return parsed
  } catch {
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
    id: crypto.randomUUID(),
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
