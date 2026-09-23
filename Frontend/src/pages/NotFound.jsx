import { Link } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"
import Container from "../components/common/Container"

function NotFound() {
  return (
    <main className="bg-white">
      <Container className="flex min-h-[70vh] items-center justify-center py-16">
        <section
          aria-labelledby="not-found-title"
          className="w-full max-w-xl text-center"
        >
          <p className="text-7xl font-semibold tracking-tight text-[#8FAF9F] sm:text-8xl">
            404
          </p>

          <h1
            id="not-found-title"
            className="mt-6 text-3xl font-semibold tracking-tight text-[#173F35] sm:text-4xl"
          >
            Page not found
          </h1>

          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-500">
            Sorry, we couldn't find the page you're looking for.
            It may have been moved, removed, or the URL may be incorrect.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#122F29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
            >
              <Home
                size={16}
                aria-hidden="true"
              />
              Back to Home
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:border-[#173F35] hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
            >
              <ArrowLeft
                size={16}
                aria-hidden="true"
              />
              Explore Products
            </Link>
          </div>
        </section>
      </Container>
    </main>
  )
}

export default NotFound