import belaledoor from "../assets/belaledoor1.jpg";
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import jsIcon from "../assets/js-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import Cplus from "../assets/c.svg";
import ROS from "../assets/Ros_logo.svg";
import Firebase from "../assets/firebase.svg";
import ScrollAnimation from "react-animate-on-scroll";
import ASP from "../assets/asp.jpeg"

export function About() {
  return (
    <section
  id="about"
  className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 text-gray-900 dark:text-white mt-40"
>

      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h1 className="inline-block mb8 text-[2.5rem] mt-0 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold">
            About me
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p className="text-[1.4rem] font-medium tracking-wide">
            Hi there! I am a software engineer specializing in web development and scalable digital solutions.
            I completed a professional training in front-end user interface development, with a particular focus on React.js, and have practical
            experience using the following programming languages: Java, HTML, CSS, JavaScript, React, Tailwind CSS, Python, and IoT. Throughout my
            academic and personal career, I have developed numerous impactful projects that demonstrate my ability to solve complex problems, write clear
            and efficient code, and deliver high-quality user experiences.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h2 className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-[2.3rem] font-semibold">
              Education:
            </h2>
            <h3 className="text-[1.8rem] font-medium">
              Computer Systems Engineering (CSE)
            </h3>
            <p className="text-[1.4rem] font-medium tracking-wide">
              Faculty of Information Technology and Computer Engineering,
              Palestine Polytechnic University | September 2020 - Present | 3.3 GPA
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h2 className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent text-2xl font-semibold">
            Here are my main Skills:
          </h2>
        </ScrollAnimation>

        <div className="hard-skills mt-6 flex items-center flex-wrap gap-[1.8rem]">
          {[Cplus, java, python, jsIcon, reactIcon, ASP, Firebase, ROS].map(
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
            className="w-full max-w-[500px] aspect-square object-cover rounded-full border border-gray-300 dark:border-gray-600 shadow-md mb-20 p-1"
            style={{ transform: 'translateY(0px)' }}
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}
