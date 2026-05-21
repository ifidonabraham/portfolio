"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { toast } from "sonner"

type Review = {
  id: string
  name: string
  rating: number
  comment: string
  createdAt: string
}

type Summary = {
  average: number
  total: number
  distribution: [number, number, number, number, number]
}

function StarPicker({
  value,
  onChange,
}: {
  value: number
  onChange: (rating: number) => void
}) {
  const [hover, setHover] = React.useState(0)

  return (
    <div
      className="flex items-center gap-1"
      role="radiogroup"
      aria-label="Select star rating from 1 to 5"
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= (hover || value)
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onFocus={() => setHover(star)}
            onBlur={() => setHover(0)}
            onClick={() => onChange(star)}
            className="rounded p-1 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <Star
              className={`h-9 w-9 ${
                active
                  ? "fill-amber-400 text-amber-400"
                  : "fill-transparent text-zinc-300 dark:text-zinc-600"
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}

function RatingBars({ summary }: { summary: Summary }) {
  return (
    <div className="space-y-2">
      {[5, 4, 3, 2, 1].map((star) => {
        const count = summary.distribution[star - 1]
        const percent = summary.total ? (count / summary.total) * 100 : 0
        return (
          <div key={star} className="flex items-center gap-3 text-sm">
            <span className="w-4 text-zinc-500">{star}</span>
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full rounded-full bg-amber-400"
              />
            </div>
            <span className="w-8 text-right text-zinc-500">{count}</span>
          </div>
        )
      })}
    </div>
  )
}

export function PortfolioRatings() {
  const [summary, setSummary] = React.useState<Summary>({
    average: 0,
    total: 0,
    distribution: [0, 0, 0, 0, 0],
  })
  const [reviews, setReviews] = React.useState<Review[]>([])
  const [loading, setLoading] = React.useState(true)
  const [submitting, setSubmitting] = React.useState(false)
  const [name, setName] = React.useState("")
  const [rating, setRating] = React.useState(0)
  const [comment, setComment] = React.useState("")

  const loadRatings = React.useCallback(async () => {
    const res = await fetch("/api/ratings")
    if (!res.ok) return
    const data = (await res.json()) as { summary: Summary; reviews: Review[] }
    setSummary(data.summary)
    setReviews(data.reviews)
    setLoading(false)
  }, [])

  React.useEffect(() => {
    loadRatings()
  }, [loadRatings])

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!rating) {
      toast.error("Please tap a star rating first.")
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch("/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, rating, comment }),
      })
      const data = (await res.json()) as {
        error?: string
        summary?: Summary
        review?: Review
      }

      if (!res.ok) {
        toast.error(data.error ?? "Could not submit rating.")
        return
      }

      if (data.summary) setSummary(data.summary)
      if (data.review) {
        setReviews((prev) => [data.review!, ...prev])
      } else {
        await loadRatings()
      }
      setName("")
      setRating(0)
      setComment("")
      toast.success("Thanks for rating my portfolio!")
    } catch {
      toast.error("Network error. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="ratings" className="section-padding bg-zinc-50/70 dark:bg-zinc-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-2"
        >
          <div className="h-1 w-12 bg-black dark:bg-white" />
          <h2 className="text-3xl font-bold tracking-tight">Rate This Portfolio</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <p className="text-sm text-zinc-500">Overall rating</p>
            <div className="mt-2 flex items-end gap-4">
              <p className="text-5xl font-bold">
                {loading ? "—" : summary.average.toFixed(1)}
              </p>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(summary.average)
                          ? "fill-amber-400 text-amber-400"
                          : "text-zinc-300 dark:text-zinc-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm text-zinc-500">
                  {summary.total} review{summary.total === 1 ? "" : "s"}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <RatingBars summary={summary} />
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold">Share your feedback</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Please rate my portfolio website (1–5 stars), like on Google Play.
            </p>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">Your rating</p>
              <StarPicker value={rating} onChange={setRating} />
            </div>

            <label className="mt-5 block text-sm font-medium">
              Name
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={80}
                className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="Your name"
              />
            </label>

            <label className="mt-4 block text-sm font-medium">
              Comment (optional)
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength={500}
                rows={4}
                className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-900"
                placeholder="What did you like or what can improve?"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-70 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              {submitting ? "Submitting..." : "Submit Rating"}
            </button>
          </motion.form>
        </div>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold">Recent reviews</h3>
          {loading ? (
            <p className="text-sm text-zinc-500">Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p className="text-sm text-zinc-500">No reviews yet. Be the first to rate.</p>
          ) : (
            reviews.slice(0, 8).map((review) => (
              <article key={review.id} className="glass rounded-xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-zinc-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-zinc-300 dark:text-zinc-600"
                      }`}
                    />
                  ))}
                </div>
                {review.comment ? (
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {review.comment}
                  </p>
                ) : null}
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
