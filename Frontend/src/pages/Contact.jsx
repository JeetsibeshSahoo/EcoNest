import Container from "../components/common/Container"
import SectionTitle from "../components/common/SectionTitle"
import Button from "../components/common/Button"

function Contact() {
  return (
    <main>
      <section className="bg-[#F7F6F1] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[#687D73]">
              Get in touch
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-[#173F35] sm:text-5xl">
              We'd love to hear from you.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Have a question about EcoNest or our products? Send us a
              message and we'll get back to you.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="Let's start a conversation."
                description="Whether you have a question, feedback, or simply want to learn more about EcoNest, we're here to help."
              />

              <div className="mt-10 space-y-6">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173F35]">
                    Email
                  </h2>

                  <a
                    href="mailto:hello@econest.com"
                    className="mt-2 inline-block text-gray-600 transition-colors hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
                  >
                    hello@econest.com
                  </a>
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173F35]">
                    Location
                  </h2>

                  <p className="mt-2 text-gray-600">
                    Bhubaneswar, Odisha
                  </p>
                </div>

                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173F35]">
                    Response time
                  </h2>

                  <p className="mt-2 text-gray-600">
                    We usually respond within 1–2 business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#173F35]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#173F35] focus:ring-2 focus:ring-[#173F35]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#173F35]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#173F35] focus:ring-2 focus:ring-[#173F35]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#173F35]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="How can we help?"
                    className="mt-2 w-full resize-y rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#173F35] focus:ring-2 focus:ring-[#173F35]/20"
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default Contact