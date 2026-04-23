export default function Loading() {
  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="h-14 w-full animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-80 w-full animate-pulse rounded-3xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-40 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-40 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-40 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  )
}
