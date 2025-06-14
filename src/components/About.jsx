import belaledoor from "../assets/belaledoor1.jpg";
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
          <h2 className="inline-block mb-8 text-3xl mt-0 text-green-500">
            About me
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p className="text-[1.8rem] font-medium tracking-wide">
            Hi there! I'm Belal Edoor, a Software Engineer skilled in web
            development, and scalable software solutions
          </p>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={200}
          className="my-8"
        ></ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={300}></ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3 className="mt-8 text-green-500 text-2xl font-semibold">
              Education:
            </h3>
            <h4 className="text-xl font-medium">
              Computer Systems Engineering (CSE)
            </h4>
            <p className="text-[1.8rem] font-medium tracking-wide">
              Faculty of Information Technology and Computer Engineering,
              Palestine Polytechnic University | September 2020 - Present
            </p>
            <p className="text-[1.8rem] font-medium tracking-wide">3.75 GPA</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3 className="mt-8 text-green-500 text-2xl font-semibold">
              Training courses:
            </h3>
            <h4 className="text-xl font-medium">Front End Developer</h4>
            <p className="text-[1.8rem] font-medium tracking-wide">
              Udacity Platform | October 2024 - March 2025 | Remotly
            </p>
            <h4 className="text-xl font-medium">React JS</h4>
            <p className="text-[1.8rem] font-medium tracking-wide">
              Code Academy |Palestine Polytechnic University | March 2024 - June
              2024 | Onsite
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3 className="mt-8 text-green-500 text-2xl font-semibold">
            Here are my main skills:
          </h3>
        </ScrollAnimation>

        <div className="hard-skills mt-6 flex items-center flex-wrap gap-[1.8rem]">
          {[python, java, jsIcon, reactIcon, htmlIcon, cssIcon, tailwind].map(
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
            className="mt-8 w-full max-w-[500px] aspect-square rounded-full object-cover grayscale-0 transition duration-500 hover:grayscale-0"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}
