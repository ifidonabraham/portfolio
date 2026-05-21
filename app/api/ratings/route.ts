import { NextResponse } from "next/server"
import { addReview, getRatingSummary, readRatings } from "@/lib/ratings-db"

export async function GET() {
  const db = await readRatings()
  const summary = getRatingSummary(db.reviews)

  return NextResponse.json({
    summary,
    reviews: db.reviews,
  })
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string
      rating?: number
      comment?: string
    }

    const name = body.name?.trim() ?? ""
    const rating = Number(body.rating)
    const comment = body.comment?.trim() ?? ""

    if (!name || name.length > 80) {
      return NextResponse.json(
        { error: "Please enter your name (max 80 characters)." },
        { status: 400 }
      )
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Please select a rating from 1 to 5 stars." },
        { status: 400 }
      )
    }

    if (comment.length > 500) {
      return NextResponse.json(
        { error: "Comment must be 500 characters or less." },
        { status: 400 }
      )
    }

    const review = await addReview({ name, rating, comment })
    const db = await readRatings()
    const summary = getRatingSummary(db.reviews)

    return NextResponse.json({ review, summary }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Could not save your rating. Please try again." },
      { status: 500 }
    )
  }
}
