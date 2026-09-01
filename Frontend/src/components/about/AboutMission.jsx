import React from 'react'
import Container from "../common/Container"
import { aboutMission } from "../../data/about"

function AboutMission() {
  return (
    <section className="bg-[#F7F6F1] py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="order-2 max-w-xl lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#173F35]">
              {aboutMission.eyebrow}
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#17201D] sm:text-5xl">
              {aboutMission.title}
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              {aboutMission.description}
            </p>
          </div>

          <div className="order-1 overflow-hidden rounded-3xl lg:order-2">
            <img
              src={aboutMission.image}
              alt="EcoNest mission"
              className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[600px]"
            />
          </div>

        </div>
      </Container>
    </section>
  )
}

export default AboutMission