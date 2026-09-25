import { Component } from "react"
import { Link } from "react-router-dom"
import Container from "./Container"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error(
      "EcoNest application error:",
      error,
      errorInfo
    )
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="bg-white">
          <Container className="flex min-h-[70vh] items-center justify-center py-16">
            <section
              aria-labelledby="error-title"
              className="w-full max-w-xl text-center"
            >
              <p className="text-7xl font-semibold tracking-tight text-[#8FAF9F] sm:text-8xl">
                Oops
              </p>

              <h1
                id="error-title"
                className="mt-6 text-3xl font-semibold tracking-tight text-[#173F35] sm:text-4xl"
              >
                Something went wrong
              </h1>

              <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-500">
                We ran into an unexpected problem while loading this
                page. Please try again or return to the EcoNest
                homepage.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={this.handleRetry}
                  className="inline-flex items-center justify-center rounded-full bg-[#173F35] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#122F29] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
                >
                  Try Again
                </button>

                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:border-[#173F35] hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
                >
                  Back to Home
                </Link>
              </div>
            </section>
          </Container>
        </main>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

