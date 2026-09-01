import Container from "../common/Container"
import Button from "../common/Button"

function AboutCTA() {
  return (
    <section className="bg-[#173F35] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Discover EcoNest
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
            Find something better for everyday life.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Explore our collection of thoughtfully selected products.
          </p>

          <div className="mt-8">
            <Button
              to="/products"
              variant="light"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutCTA