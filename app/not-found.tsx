import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-extrabold">404</p>
        <h1 className="mt-4 text-3xl font-bold">Page Not Found</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          The page you requested has moved or does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
