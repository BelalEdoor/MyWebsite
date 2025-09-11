import belaledoor from "../assets/belaledoor1.jpg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import jsIcon from "../assets/js-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import Cplus from "../assets/c.svg";
import Firebase from "../assets/firebase.svg";
import ScrollAnimation from "react-animate-on-scroll";
import ASP from "../assets/asp-removebg-preview.png"
import Csharp from "../assets/Logo_C_sharp.svg"
import nodejs from  "../assets/node_js-removebg-preview.png"
import typescript from "../assets/typescript.svg"
import Anguler from "../assets/anguler-removebg-preview.png"


export function About() {
  return (
    <section
  id="about"
  className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 text-gray-900 dark:text-white mt-20"
>

      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h1 className="inline-block mb8 text-[2.5rem] mt-0 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold">
            About me
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p className="text-[1.5rem] font-medium tracking-wide">
I am a Software Engineer with strong expertise in web development, scalable systems, and Artificial Intelligence solutions. I have extensive experience in building full-stack platforms and integrating machine learning models and AI technologies into real-world applications. I am highly skilled in React, ASP.NET, Node.js, and other modern frameworks, and I have enhanced my practical knowledge through hands-on training and internships in AI, NLP, and backend systems.

Throughout my projects, I focus on creating efficient, user-centric applications that solve real-world problems. My strong foundation in data structures, algorithms, and backend architectures, combined with my dedication to learning emerging AI technologies, allows me to design, implement, and optimize innovative solutions. I thrive on bridging academic knowledge with practical experience, continuously improving my technical skills, and delivering impactful, intelligent systems that drive measurable results.             </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h2 className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-[2.5rem] font-semibold">
              Education:
            </h2>
            <h3 className="text-[1.7rem] font-medium">
              Computer Systems Engineering (CSE)
            </h3>
            <p className="text-[1.5rem] font-medium tracking-wide">
              Faculty of Information Technology and Computer Engineering,
              Palestine Polytechnic University | September 2020 - Present | 3.3 GPA
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h2 className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-[1.5rem] font-semibold">
            Here are my main Skills:
          </h2>
        </ScrollAnimation>

        <div className="hard-skills mt-6 flex items-center flex-wrap gap-[1.8rem]">
          {[Cplus, Csharp, java, python, jsIcon, reactIcon, Anguler, typescript, Firebase, ASP, nodejs].map(
            (icon, i) => (
              <div
                className="hability flex flex-col items-center"
                key={i}
              >
                <ScrollAnimation
                  animateIn="fadeInUp"
                  delay={(0.10 + i * 0.01) * 1000}
                >
                  <img src={icon} alt="skill-icon" className="w-[3rem]" />
                </ScrollAnimation>
              </div>
            )
          )}
        </div>
      </div>

<div className="about-image text-center mt-8 md:mt-0 md:ml-40">
        <ScrollAnimation animateIn="zoomIn" delay={210}>
          <img
            src={belaledoor}
            alt="Belal Edoor"
            className="w-full max-w-[500px] aspect-square object-cover rounded-full border border-gray-300 dark:border-gray-600 shadow-md mb-20 p-1"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}
