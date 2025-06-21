import githubIcon from "../assets/github.svg";
import externalLink from "../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import imgAddressBook from "../assets/address-book.jpg";
import imgBilalStore from "../assets/bilal-store.jpg";
import imgSmartDriving from "../assets/smart-driving.jpg";
import imglibrery from "../assets/download1.jpeg";
import imgCapstoneTravel from "../assets/capstone-travel.jpg";

export function Project() {
  const projects = [
    {
      title: "Address Book",
      description:
        "This project was designed using object-oriented programming with Java, where all the basic concepts were applied in this project, such as interface, anteriority, polymorphism, and the project was worked using the GUI.",
      github: "https://github.com/belal3door/Address-book.git",
      external: "https://github.com/belal3door/Address-book.git",
      technologies: ["JAVA", "OOP"],
      ImgCard: imgAddressBook,
    },
    {
      title: "Smart Driving",
      description:
        "The project involves controlling the car via the Internet The ESP32 was used as a microcontroller, joystick, and the Arduino Cloud site to connect the board, the controller, and the car board.",
      github: "",
      external: "",
      technologies: ["C++", "Arduino cloud", "Esp32 microcontroller"],
      ImgCard: imgSmartDriving,
    },
    {
      title: "E-commerce store",
      description:
        "An online store built with React that displays categorized products, supports search and filtering, and allows users to add products to their cart or favorites. It offers a responsive and easy-to-use user interface, with real-time interactions . ",
      github: "https://github.com/belal3door/E-commerce-store.git",
      external: "https://github.com/belal3door/E-commerce-store.git",
      technologies: ["React Js", "Tailwind css" , "react-reouter-dom"],
      ImgCard: imgBilalStore,
      
    },
    
   
    {
      title: "Capstone travel app",
      description:
        "A frontend capstone project that builds a travel app, integrating APIs to fetch weather, location, and trip details for a dynamic user experience.",
      github: "https://github.com/belal3door/Capstone-travel-app.git",
      external: "https://github.com/belal3door/Capstone-travel-app.git",
      technologies: ["Node js", "HTML", "CSS", "Javascript"],
      ImgCard: imgCapstoneTravel,
    },
     {
      title: "Scientific Research Library",
      description:
        "The Scientific Research Library is a digital platform committed to advancing knowledge by providing easy access to high-quality scientific publications, research papers, and educational resources.",
      github: "https://github.com/belal3door/Scientific-Research-Library.git",
      external: "https://github.com/belal3door/Scientific-Research-Library.git",
      technologies: ["React Js", "Tailwind css" , "react-reouter-dom"],
      ImgCard: imglibrery,
    },
    
  ];

  return (
    <section id="project" className="mt-40 px-6">
      <ScrollAnimation animateIn="fadedown">
        <h2 className="text-center mt-8 text-purple-500 text-[2.5rem] font-semibold">
          My Projects
        </h2>
      </ScrollAnimation>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="fadeInUp" key={index}>
<div className="bg-gray-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col h-[400px] transition duration-300 hover:scale-105 hover:bg-gray-200">
              <img
                src={project.ImgCard}
                alt="project img"
                className="w-full h-70 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-[1.4rem] font-bold text-gray-800">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="GitHub" className="w-6" />
                      </a>
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={externalLink} alt="External" className="w-6" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 text-[1.2rem] leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-500">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="bg-gray-100 px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
