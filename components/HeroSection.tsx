import React from "react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section id="home" className="-top-12">
      <div className="flex flex-col-reverse text-center items-center justify-center my-24 md:flex-row md:text-left">
        <div className="md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={300}
            height={300}
            className="rounded-full shadow-2xl mt-8"
          />
        </div>
        <div className="mt-4 md:w-3/5">
          <h1 className="text-4xl font-bold  md:text-6xl">Hi, I'm Walton!</h1>
          <p className="text-lg mt-4 mb-6 md:pr-28 md:text-xl">
            I'm a{" "}
            <span className="font-semibold text-teal-600">
              Web Developer{" "}
            </span>
            with <span className="font-semibold text-teal-600">5 years</span> of experience. I am competent in front-end and back-end development.
          </p>
          <a
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            href="#projects"
          >
            Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection