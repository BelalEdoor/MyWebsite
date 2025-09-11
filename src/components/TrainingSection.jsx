import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function TrainingSection() {
const trainings = [
  {
    title: "Front-End Development Training (React.js)",
    period: "March 2024 – June 2024",
    place: "Code Academy – Palestine Polytechnic University",
    description:
      "🎓 I completed an intensive hands-on training focused on building modern, responsive web applications using React.js and Tailwind CSS. I applied service design principles to create scalable front-end systems and worked on real-world projects both individually and in groups, improving my teamwork and problem-solving skills.",
  },
  {
    title: "Front-End Development Nanodegree",
    period: "October 2024 – March 2025",
    place: "Udacity Platform",
    description:
      "🎓 I completed hands-on training in core front-end technologies such as HTML, CSS, JavaScript, SCSS, and Webpack, gaining experience in modular programming, component-based architecture, and best practices. The program also included using Node.js and Express.js to build back-end services, enabling me to develop and deploy fully integrated projects with mentor feedback.",
  },
  {
    title: "NLP & LLM Training",
    period: "June 2025 – Aug 2025",
    place: "Gaza Sky Geeks",
    description:
      "🎓 I have successfully completed a specialized training program in natural language processing (NLP) and large language models (LLMs). The program covered key topics such as text analysis, language model engineering, and real-world AI applications. Through practical projects and case studies, I gained hands-on experience in effectively applying these concepts to real-world scenarios.",
  },
  {
    title: "Firebase Essentials Training",
    period: "July 2025",
    place: "Code Academy",
    description:
      "🎓 I completed the Firebase Essentials training program, gaining practical skills in authentication, cloud storage, real-time database, and hosting. This training enabled me to integrate Firebase services into web and mobile applications, enhancing scalability and user experience.",
  },
  {
    title: "Test Driven Development Training",
    period: "July 2025",
    place: "Code Academy",
    description:
      "🎓 I successfully completed the Test Driven Development (TDD) training, learning to write and implement tests before coding to ensure software quality, maintainability, and reliability. This approach improved my debugging efficiency and strengthened my problem-solving skills.",
  },
  {
    title: "AI Back-End Development Internship",
    period: "July 2025 – Aug 2025",
    place: "Trusted Systems",
    description:
      "🎓 Successfully completed a hands-on ASP.NET back-end development training, focusing on building and maintaining server-side applications. Gained practical experience in database management, authentication, and application deployment, while following clean code principles and best practices .As a final project, I developed a Bookstore web application enhanced with an AI model to provide book recommendations and summaries.",
  },
  {
    title: "Full-Stack Development Nanodegree",
    period: "August 2025 – Present",
    place: "Udacity Platform",
    description:
      "I am currently enrolled in the Full Stack Web Developer Nanodegree - Palestine Track by Udacity. Through this program, I’ve gained hands-on experience in building scalable web applications using modern technologies such as Angular, Node.js, PostgreSQL, and RESTful APIs. The program emphasizes real-world projects, backend authentication, and deployment practices — preparing me to deliver production-ready digital solutions.",
  },
  {
    title: "AI Intern – Deep Dive LLM",
    period: "Sep 2025 – Present",
    place: "zakey.tech",
    description:
      "I am participating in an intensive 4-month bootcamp focused on building and deploying AI agents using cutting-edge Large Language Models (LLMs), where I gain hands-on experience with modern AI tools and frameworks for real-world applications. I develop practical skills in natural language understanding, model fine-tuning, and AI solution deployment, while collaborating with peers and mentors to design, implement, and optimize AI-driven solutions. This experience allows me to deepen my knowledge in AI, deep learning, and emerging LLM technologies, enhancing my problem-solving capabilities and preparing me to create impactful solutions.",
  },
    {
    title: "DataCamp Scholarship Program",
    period: "Sep 2025 – Sep 2026",
    place: "Gaza Sky Geeks",
    description:
      "I was awarded a fully-funded DataCamp scholarship to advance my skills in data science, Python, SQL, and AI tools through a structured self-paced program. During this program, I complete hands-on projects and real-world exercises that cover data analysis, visualization, machine learning, and AI applications. I collaborate with mentors and peers to apply practical techniques, optimize workflows, and implement data-driven solutions. This experience enhances my technical proficiency, problem-solving abilities, and readiness to develop impactful solutions in data science and AI domains.",
  },
];

  return (
  <section
  id="training"
  className="px-4 sm:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500"
>
  <div className="max-w-screen-xl mx-auto">
    <ScrollAnimation animateIn="fadeInDown">
      <h2 className="text-center text-[3.2rem] font-bold text-purple-600 dark:text-purple-400 mb-24">
        Internships & Trainings
      </h2>
    </ScrollAnimation>

    <div className="relative border-l-[4px] border-purple-500 dark:border-purple-600 pl-10 space-y-16">
      {trainings.map((training, idx) => (
        <ScrollAnimation
          key={idx}
          animateIn="flipInX"
          delay={idx * 100}
          className="relative"
        >
          <div className="absolute -left-[18px] top-1 w-7 h-7 bg-purple-500 dark:bg-purple-400 rounded-full border-[5px] border-white dark:border-gray-950 shadow-xl"></div>
          <div className="pl-2">
            <h3 className="text-[1.8rem] font-semibold text-purple-700 dark:text-purple-300 mb-2">
              {training.title}
            </h3>
            <p className="text-[1rem] text-gray-600 dark:text-gray-400 mb-3">
              📍 {training.place} | 🗓️ {training.period}
            </p>
            <p className="text-[1.3rem] text-gray-700 dark:text-gray-300 leading-relaxed">
              {training.description}
            </p>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
</section>


  );
}
