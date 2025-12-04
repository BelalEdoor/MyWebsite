import githubIcon from "../assets/github.svg";
import externalLink from "../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import LitMinde from "../assets/LitMinde.jpg"
import bookshop from "../assets/bookshop.jpeg"
import Mystore from "../assets/my store.png"
import AllerPredict from "../assets/AllerPredict.png"
export function Project() {
  const projects = [

    
    {
      title: "LitMinde",
      description:
        "Developed LitMind, an interactive Python app with Gradio that summarizes books using BART and recommends top-rated recent titles with caching for efficiency.",
      github: "https://github.com/BelalEdoor/LitMind_Story_Summarization_And_Recommendation_chatbot.git",
      external: "https://github.com/BelalEdoor/LitMind_Story_Summarization_And_Recommendation_chatbot.git",
      technologies: [ "Pandas", "PyTorch", "Hugging Face Transformers (BART)", "Gradio", "JSON"],
      ImgCard: LitMinde,
    },
    {
      title: "BookEcommerce APIs",
      description:
        "The Book_Ecommerce_APIs project is an ASP.NET-based API set designed to support book e-commerce applications, focusing on data management, operations handling, and application workflows.",
      github: "https://github.com/BelalEdoor/Book_Ecommerce_APIs.git",
      external: "https://github.com/BelalEdoor/Book_Ecommerce_APIs.git",
      technologies: ["ASP.NET Core", "APIs", "Entity Framework", "SQL Server"],
      ImgCard: bookshop,
    },
    {
      title: "My Store",
      description:
        "MyStore is a fully integrated online store built using Angular and Node.js with a PostgreSQL database. It allows displaying products, managing orders, and the purchasing process through a modern and fast interface.",
      github: "https://github.com/BelalEdoor/BelalEdoor-store_angular_Udacity_project.git , https://github.com/BelalEdoor/Shopping_API.git",
      external: "https://github.com/BelalEdoor/BelalEdoor-store_angular_Udacity_project.git , https://github.com/BelalEdoor/Shopping_API.git",
      technologies: ["Node.JS","Express.JS", "APIs", "PostgresQL", "Angular"],
      ImgCard: Mystore,
    },
    {
      title: "AllerPredict AI",
      description:
        "AllerPredict AI is an intelligent system that detects allergens, evaluates risk levels, and generates ethical scores for products using RAG, embeddings, and AI retrieval to deliver accurate insights and safer alternatives through a smooth chat-based interface.",
      github: "https://github.com/your-backend-repo , https://github.com/your-frontend-repo",
      external: "https://github.com/your-backend-repo , https://github.com/your-frontend-repo",
      technologies: ["Python 3.10+", "FastAPI", "Pydantic", "SentenceTransformers", "NumPy", "Ollama AI", "React 18+", "Tailwind CSS"],
      ImgCard: AllerPredict,
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
          <ScrollAnimation animateIn="zoomIn" key={index}>
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