import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Three in a Row Game (In-campus)",
    description:
      "This is a simple three in a row game that I created for my MDE class. It uses HTML, CSS, JavaScript and React.",
    image: "/threeinrowgame.png",
    github: "https://github.com/waltonca/PROG2700-MDE-assignment-5c-waltonca",
    link: "https://rowgame.vercel.app/",
  },
  {
    name: "Bird Feeder (In-campus)",
    description: "Bird Feeder is a small project for our IT project work term. We use Raspberry Pi to take pictures of birds and upload them to the Server through MQTT. We use Python, Flask, HTML, CSS, JavaScript, and React.",
    image: "/birdfeeder.png",
    github: "https://github.com/waltonca/BirdFeeder",
    link: "https://birdfeed.netlify.app/",
  },
  {
    name: "Transit tracker (In-campus)",
    description:
      "Fetch real-time transit data information data from a publicly available API. (Flight or Bus data).Filter the raw data to a subset with specific criteria.Convert the filtered API data into GeoJSON format.Plot markers on the map to display the current position of vehicles.",
    image: "/hfxtransit.png",
    github: "https://github.com/waltonca/PROG2700-MDE-assignment-3c-waltonca",
    link: "https://hfxtransit.vercel.app",
  },
  {
    name: "Radio and Television Website (Off-campus)",
    description:
      "This is a website that I created for a radio and television station in China. It uses HTML, CSS, JavaScript and TRS WCM. TRS WCM is a content management system that is widely used in China.like WordPress.",
    image: "/cditv.png",
    github: "https://www.trs.com.cn/",
    link: "https://www.cditv.cn/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection