import Link from "next/link"
import { Star } from "lucide-react"
import { getRatingSummary, readRatings } from "@/lib/ratings-db"

export const metadata = {
  title: "Portfolio Ratings Admin | Ifidon Abraham",
  description: "View all portfolio ratings and comments stored in data/ratings.json",
}

export default async function RatingsAdminPage() {
  const db = await readRatings()
  const summary = getRatingSummary(db.reviews)

  return (
    <main className="min-h-screen px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Portfolio Ratings Admin</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              All ratings are saved in <code>data/ratings.json</code>.
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Back to portfolio
          </Link>
        </div>

        <div className="glass mb-8 grid gap-4 rounded-2xl p-6 sm:grid-cols-3">
          <div>
            <p className="text-sm text-zinc-500">Average</p>
            <p className="text-3xl font-bold">{summary.average.toFixed(1)} / 5</p>
          </div>
          <div>
            <p className="text-sm text-zinc-500">Total reviews</p>
            <p className="text-3xl font-bold">{summary.total}</p>
          </div>
          <div>
            <p className="text-sm text-zinc-500">Database file</p>
            <p className="font-mono text-sm">data/ratings.json</p>
          </div>
        </div>

        {db.reviews.length === 0 ? (
          <p className="text-zinc-600 dark:text-zinc-400">No ratings yet.</p>
        ) : (
          <div className="space-y-4">
            {db.reviews.map((review) => (
              <article key={review.id} className="glass rounded-xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-semibold">{review.name}</h2>
                  <time className="text-xs text-zinc-500">
                    {new Date(review.createdAt).toLocaleString()}
                  </time>
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
                  <span className="ml-2 text-sm text-zinc-500">{review.rating}/5</span>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {review.comment || "(No comment)"}
                </p>
                <p className="mt-2 font-mono text-xs text-zinc-500">ID: {review.id}</p>
              </article>
            ))}
          </div>
        )}

        <section className="mt-10">
          <h2 className="mb-3 text-lg font-semibold">Raw JSON</h2>
          <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-950">
            {JSON.stringify(db, null, 2)}
          </pre>
        </section>
      </div>
    </main>
  )
}
