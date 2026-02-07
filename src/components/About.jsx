  import belaledoor from "../assets/belaledoor1.jpeg";
  import python from "../assets/python.svg";
  import jsIcon from "../assets/js-icon.svg";
  import ScrollAnimation from "react-animate-on-scroll";
  import ASP from "../assets/asp-removebg-preview.png"
  import Csharp from "../assets/Logo_C_sharp.svg"
  import nodejs from  "../assets/node_js-removebg-preview.png"
  import typescript from "../assets/typescript.svg"
  import Docker from "../assets/docker-svgrepo-com.svg"
  import AI from "../assets/ai-svgrepo-com.svg"
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
  I am a Software Engineer specializing in Back-end Development and Artificial Intelligence. My expertise lies in designing and building scalable, reliable, and efficient server-side systems, with a strong focus on integrating machine learning models and AI-driven solutions into real-world applications.

  I have extensive experience working with ASP.NET, Node.js, Entity Framework, and PostgreSQL, enabling me to develop robust APIs and back-end architectures that power intelligent, data-driven platforms. My background in AI and NLP, strengthened through hands-on projects and internships, allows me to bridge advanced algorithms with practical deployment to deliver impactful digital solutions.

  With a solid foundation in data structures, algorithms, and distributed systems, I am dedicated to continuously improving my technical expertise and applying emerging AI technologies to solve complex problems. My passion lies in building innovative back-end systems enhanced with AI that drive measurable value and support scalable business growth.            </p>
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
            {[  python, Csharp, jsIcon, typescript, ASP, nodejs,AI, Docker].map(
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
