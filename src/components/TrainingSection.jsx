import React from "react";
import { motion } from "framer-motion";

export function TrainingSection() {
  const trainings = [
    {
      title: "Front-End Development Training (React.js)",
      period: "March 2024 – June 2024",
      place: "Code Academy – Palestine Polytechnic University",
      description:
        "I completed an intensive hands-on training focused on building modern, responsive web applications using React.js and Tailwind CSS. I applied service design principles to create scalable front-end systems and worked on real-world projects both individually and in groups, improving my teamwork and problem-solving skills.",
    },
    {
      title: "Front-End Development Nanodegree",
      period: "October 2024 – March 2025",
      place: "Udacity Platform",
      description:
        "I completed hands-on training in HTML, CSS, JavaScript, SCSS, and Webpack, gaining experience in modular programming and best practices. I also worked with Node.js and Express.js to build fully integrated projects with mentor feedback.",
    },
    {
      title: "NLP & LLM Training",
      period: "June 2025 – Aug 2025",
      place: "Gaza Sky Geeks",
      description:
        "Specialized training program in NLP and LLMs. Covered text analysis, language model engineering, and real-world AI applications. Gained hands-on experience through practical projects and case studies.",
    },
    {
      title: "Firebase Essentials Training",
      period: "July 2025",
      place: "Code Academy",
      description:
        "Practical training in Firebase authentication, cloud storage, real-time database, and hosting. Integrated Firebase services into web and mobile applications to improve scalability and user experience.",
    },
    {
      title: "AI and Machine learning",
      period: "July 2025 - Sep 2025 ",
      place: "Sprints Platform",
      description:
        "Earned a certification in AI and Machine Learning from Sprints, covering supervised and unsupervised learning, neural networks, and model evaluation. The program emphasized hands-on projects applying data preprocessing, feature engineering, and predictive modeling.",
    },
    {
      title: "AI Back-End Development Internship",
      period: "July 2025 – Aug 2025",
      place: "Trusted Systems",
      description:
        "Hands-on ASP.NET back-end development internship. Focused on database management, authentication, and deployment. Final project: Bookstore web app with AI-powered recommendations.",
    },
    {
      title: "Full-Stack Development Nanodegree",
      period: "August 2025 – Present",
      place: "Udacity Platform",
      description:
        "Currently enrolled in the Full-Stack Web Developer Nanodegree. Working with Angular, Node.js, PostgreSQL, and REST APIs. Building production-ready apps with authentication, deployment, and scalability.",
    },
    {
      title: "AI Intern – Deep Dive LLM",
      period: "Sep 2025 – Present",
      place: "zakey.tech",
      description:
        "Intensive bootcamp on AI agents and LLMs. Gained hands-on skills in natural language understanding, fine-tuning, and AI solution deployment. Collaborated with peers and mentors on impactful AI-driven projects.",
    },
    {
      title: "DataCamp Scholarship Program",
      period: "Sep 2025 – Sep 2026",
      place: "Gaza Sky Geeks",
      description:
        "Awarded a full DataCamp scholarship to advance skills in Python, SQL, and AI tools. Completed hands-on projects in data analysis, visualization, ML, and AI applications with mentorship and peer collaboration.",
    },
  ];

  return (
    <section
      id="training"
      className="mt-60 sm:px-12 lg:px-20 py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold text-purple-600 dark:text-purple-400 mb-16"
        >
          Internships & Trainings
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {trainings.map((training, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border border-gray-200 dark:border-gray-700 p-6 flex flex-col h-full"
            >
              <div>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">
                  {training.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {training.place} | {training.period}
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {training.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
