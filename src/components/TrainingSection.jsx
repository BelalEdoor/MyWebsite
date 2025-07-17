import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function TrainingSection() {
  return (
    <section
      className="mt-24 px-4 dark:bg-gray-900 transition-colors duration-500"
      id="training"
    >
      <ScrollAnimation animateIn="fadeInLeft">
        <h2 className="text-[2.4rem] font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-12">
          Internships:
        </h2>
      </ScrollAnimation>

      <div className="space-y-12">
        {/* ==== Training 1 ==== */}
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <div>
            <h3 className="text-[1.8rem] font-semibold text-gray-800 dark:text-white mb-2">
              Front-End Development Training (React.js)
            </h3>
            <p className="text-[1.4rem] text-gray-600 dark:text-gray-300 font-medium mb-2">
              📍 Code Academy – Palestine Polytechnic University | 🗓️ March 2024 – June 2024
            </p>
            <p className="text-[1.3rem] text-gray-800 dark:text-gray-200 leading-relaxed">
              I completed an intensive hands-on training focused on building modern, responsive web applications using React.js and Tailwind CSS.
              I applied service design principles to create scalable front-end systems and worked on real-world projects both individually and in groups,
              improving my teamwork and problem-solving skills.
            </p>
          </div>
        </ScrollAnimation>

        {/* ==== Training 2 ==== */}
        <ScrollAnimation animateIn="fadeInLeft" delay={200}>
          <div>
            <h3 className="text-[1.8rem] font-semibold text-gray-800 dark:text-white mb-2">
              Front-End Development Nanodegree
            </h3>
            <p className="text-[1.4rem] text-gray-600 dark:text-gray-300 font-medium mb-2">
              📍 Udacity Platform | 🗓️ October 2024 – March 2025
            </p>
            <p className="text-[1.3rem] text-gray-800 dark:text-gray-200 leading-relaxed">
              I completed hands-on training in core front-end technologies such as HTML, CSS, JavaScript, SCSS, and Webpack, gaining experience
              in modular programming, component-based architecture, and best practices. The program also included using Node.js and Express.js to build
              back-end services, enabling me to develop and deploy fully integrated projects with mentor feedback.
            </p>
          </div>
        </ScrollAnimation>

        {/* ==== Training 3 ==== */}
        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <div>
            <h3 className="text-[1.8rem] font-semibold text-gray-800 dark:text-white mb-2">
              NLP & LLM Training
            </h3>
            <p className="text-[1.4rem] text-gray-600 dark:text-gray-300 font-medium mb-2">
              📍 Gaza Sky Geeks | 🗓️ June 2025 – Present
            </p>
            <p className="text-[1.3rem] text-gray-800 dark:text-gray-200 leading-relaxed">
              I am currently participating in a training program specializing in Natural Language Processing (NLP) and Large Language Models (LLMs).
              The training covers key topics such as text analysis, language model engineering, and real-world AI applications. Through practical projects and
              case studies, I gain experience in effectively applying these concepts in real scenarios.
            </p>
          </div>
        </ScrollAnimation>

        {/* ==== Training 4 ==== */}
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div>
            <h3 className="text-[1.8rem] font-semibold text-gray-800 dark:text-white mb-2">
              AI Back-End Development Internship
            </h3>
            <p className="text-[1.4rem] text-gray-600 dark:text-gray-300 font-medium mb-2">
              📍 Trusted Systems | 🗓️ July 2025 – Present
            </p>
            <p className="text-[1.3rem] text-gray-800 dark:text-gray-200 leading-relaxed">
              AI Back-End Development involves building and optimizing server-side systems to support AI applications, including data processing,
              model integration, and API development. It focuses on ensuring scalability, performance, and secure communication between AI models and
              client interfaces.
            </p>
          </div>
        </ScrollAnimation>

        {/* ==== Training 5 ==== */}
        <ScrollAnimation animateIn="fadeInLeft" delay={500}>
          <div>
            <h3 className="text-[1.8rem] font-semibold text-gray-800 dark:text-white mb-2">
              AI and Machine Learning Bootcamp
            </h3>
            <p className="text-[1.4rem] text-gray-600 dark:text-gray-300 font-medium mb-2">
              📍 Sprints Platform | 🗓️ July 2025 – Present
            </p>
            <p className="text-[1.3rem] text-gray-800 dark:text-gray-200 leading-relaxed">
              I am currently undergoing hands-on training in Machine Learning and Artificial Intelligence, where I’m learning to build intelligent systems using Python, Scikit-learn, TensorFlow, and NLP techniques.
              The training focuses on real-world applications of AI, including data preprocessing, model development, evaluation, and deployment. This experience is helping me strengthen my problem-solving skills and deepen my understanding of modern AI technologies. I’m excited to keep learning and applying AI to create meaningful impact.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
