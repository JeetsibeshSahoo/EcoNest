 import Container from "../common/Container"
import SectionTitle from "../common/SectionTitle"

import { aboutValues } from "../../data/about"

function AboutValues() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionTitle
          eyebrow="What we believe"
          title="The principles behind EcoNest."
          description="Our approach is guided by a few simple principles that shape the products we choose and the experience we want to create."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {aboutValues.map((value) => (
            <article
              key={value.id}
              className="rounded-3xl border border-gray-200 p-7 sm:p-8"
            >
              <span className="text-sm font-semibold text-[#173F35]">
                0{value.id}
              </span>

              <h3 className="mt-8 font-serif text-2xl text-[#17201D]">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutValues