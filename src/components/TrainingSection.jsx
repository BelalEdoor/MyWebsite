import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export function TrainingSection() {
  const trainings = [
    {
      title: "Front-End Development Training (React.js)",
      period: "March 2024 – June 2024",
      place: "Code Academy – Palestine Polytechnic University",
      description:
        "🎓 I completed an intensive hands-on training focused on building modern, responsive web applications using React.js and Tailwind CSS. I applied service design principles to create scalable front-end systems and worked on real-world projects both individually and in groups, im roving my teamwork and problem-solving skills. ",
    },
    {
      title: "Front-End Development Nanodegree",
      period: "October 2024 – March 2025",
      place: "Udacity Platform",
      description:
        "🎓 I completed hands-on training in core front-end technologies such as HTML, CSS, JavaScript, SCSS, and Webpack, gaining experience in modular programming, component-based architecture, and best practices. The program also included using Node.js and Express.js to build back-end services, enabling me to develop and deploy fully integrated projects with mentor feedback. ",
    },
    {
      title: "NLP & LLM Training",
      period: "June 2025 – Present",
      place: "Gaza Sky Geeks",
      description:
        "I am currently participating in a training program specializing in natural language processing (NLP) and large language models (LLMs). The training covers key topics such as text analysis, language model engineering, and real-world AI applications. Through practical projects and case studies, I gain practical experience in effectively applying these concepts in real-world situations. ",
    },
    {
      title: "AI Back-End Development Internship",
      period: "July 2025 – Present",
      place: "Trusted Systems",
      description:
        "AI Back-End Development involves building and optimizing server-side systems to support AI applications, including data processing, model integration, and API development. It focuses on ensuring scalability, performance, and secure communication between AI models and client interfaces. ",
    },
    {
      title: "AI and Machine Learning Bootcamp",
      period: "July 2025 – Present",
      place: "Sprints Platform",
      description:
        "The training focuses on real-world applications of AI, including data preprocessing, model development, evaluation, and deployment. This experience is helping me strengthen my problem-solving skills and deepen my understanding of modern AI technologies. I’m excited to keep learning and applying AI to create meaningful impact.",
    },
    {
      title: "Full-Stack Development Nanodegree",
      period: "Augest 2025 – Present",
      place: "Udacity Platform",
      description:
        "I am currently enrolled in the Full Stack Web Developer Nanodegree - Palestine Track by Udacity. Through this program, I’ve gained hands-on experience in building scalable web applications using modern technologies such as Angular, Node.js, PostgreSQL, and RESTful APIs. The program emphasizes real-world projects, backend authentication, and deployment practices — preparing me to deliver production-ready digital solutions.",
    },
  ];

  return (
  <section
  id="training"
  className="px-4 sm:px-10 lg:px-20 py-28 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500"
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
