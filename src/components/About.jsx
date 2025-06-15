import belaledoor from "../assets/belaledoor1.png";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import tailwind from "../assets/tailwind.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <section
      id="about"
      className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
    >
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h1 className="inline-block mb-8 text-[2.5rem] mt-0 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold">
            About me
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p className="text-[1.4rem] font-medium tracking-wide text-white">
            Hi there! I'm Belal Edoor, a Software Engineer skilled in web
            development, and scalable software solutions
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h2 className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-[2.3rem] font-semibold">
              Education:
            </h2>
            <h3 className="text-[1.8rem] font-medium text-white">
              Computer Systems Engineering (CSE)
            </h3>
            <p className="text-[1.4rem] font-medium tracking-wide text-white">
              Faculty of Information Technology and Computer Engineering,
              Palestine Polytechnic University | September 2020 - Present | 3.85 GPA
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h2 className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-[2.4rem] font-semibold">
              Training courses:
            </h2>
            <h4 className="text-[1.4rem] font-medium text-white">Front End Developer</h4>
            <p className="text-[1.3rem] font-medium tracking-wide text-white">
              Udacity Platform | October 2024 - March 2025 | Remotly
            </p>
            <h4 className="text-[1.4rem] font-medium text-white">React JS</h4>
            <p className="text-[1.3rem] font-medium tracking-wide text-white">
              Code Academy |Palestine Polytechnic University | March 2024 - June
              2024 | Onsite
            </p>
            <h4 className="text-[1.4rem] font-medium text-white">NLP & LLM Training</h4>
            <p className="text-[1.3rem] font-medium tracking-wide text-white">
              Gaza Sky Geeks | June 2025 - present | Remotly
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h2 className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-2xl font-semibold">
            Here are my main skills:
          </h2>
        </ScrollAnimation>

        <div className="hard-skills mt-6 flex items-center flex-wrap gap-[1.8rem]">
          {[ java, htmlIcon, cssIcon, jsIcon ,reactIcon, tailwind , python].map(
            (icon, i) => (
              <div
                className="hability flex flex-col items-center"
                key={i}
              >
                <ScrollAnimation
                  animateIn="fadeInUp"
                  delay={(0.10 + i * 0.01) * 1000}
                >
                  <img src={icon} alt="skill-icon" className="w-[3.4rem]" />
                </ScrollAnimation>
              </div>
            )
          )}
        </div>
      </div>

      <div className="about-image text-center mt-8 md:mt-0">
        <ScrollAnimation animateIn="fadeInRight" delay={210}>
          <img
            src={belaledoor}
            alt="Belal Edoor"
            className=" w-full max-w-[600px] aspect-square  object-cover  border-gradient-to-r  p-1"
            style={{ transform: 'translateY(60px)' }}
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}
