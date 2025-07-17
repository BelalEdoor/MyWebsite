import githubIcon from "../assets/github.svg";
import externalLink from "../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import imgAddressBook from "../assets/address-book.jpg";
import imgBilalStore from "../assets/bilal-store.jpg";
import imgSmartDriving from "../assets/smart-driving.jpg";
import imglibrery from "../assets/download1.jpeg";
import imgCapstoneTravel from "../assets/capstone-travel.jpg";
import imgdentalhub from "../assets/Dentalhub.png"
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
        "An online store built with React that displays categorized products.It supports search, filtering, and lets users add items to cart or favorites.The interface is responsive, user-friendly, and enables real-time interactions. ",
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
    {
      title: "DentalHub Platform",
      description:
        "DentalHub Platform is a digital system for managing dental clinics, offering tools for appointments, patient records, and communication. It enhances workflow efficiency and improves patient experience.",
      github: "https://github.com/BelalEdoor/DentalHub-Platform.git",
      external: "https://github.com/BelalEdoor/DentalHub-Platform.git",
      technologies: ["React Js", "API Context"],
      ImgCard: imgdentalhub,
    },
  ];

  return (
    <section id="project" className="mt-40 px-6">
      <ScrollAnimation animateIn="fadedown">
        <h2 className="text-center mt-8 text-purple-500 text-[2.5rem] font-semibold">
          My Projects
        </h2>
      </ScrollAnimation>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="fadeInUp" key={index}>
<div className="bg-gradient-to-b from-white to-gray-200 dark:from-gray-600 dark:to-gray-700 
  rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[400px] 
  transition duration-300 hover:scale-105">

  {/* صورة المشروع */}
  <div className="overflow-hidden">
    <img
      src={project.ImgCard}
      alt="project img"
      className="w-full h-200 object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>

  {/* المحتوى */}
  <div className="p-6 flex flex-col justify-between flex-grow gap-5">
    {/* العنوان والروابط */}
    <div className="flex items-start justify-between">
      <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white leading-tight">
        {project.title}
      </h3>
      <div className="flex gap-3 mt-1">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-6 hover:scale-110 transition-transform"
            />
          </a>
        )}
        {project.external && (
          <a href={project.external} target="_blank" rel="noreferrer">
            <img
              src={externalLink}
              alt="External"
              className="w-6 hover:scale-110 transition-transform"
            />
          </a>
        )}
      </div>
    </div>

    {/* الوصف */}
    <p className="text-gray-600 dark:text-gray-300 text-xl   leading-relaxed">
      {project.description}
    </p>

    {/* التقنيات */}
    <ul className="flex flex-wrap gap-2 mt-2">
      {project.technologies.map((tech, i) => (
        <li
          key={i}
          className="bg-purple-100 dark:bg-purple-800/40 text-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-sm"
        >
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