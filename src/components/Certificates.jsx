import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import imgFirebase from "../assets/firebase-cert.jpg";
import imgReact from "../assets/web-dev-cert.jpeg";
import tdd from "../assets/TDD.jpg"
import Alg from "../assets/alg.png"

 export function Certificates() {
  const certificates = [
      {
      title: "Front-End Development",
      description:
        "Advanced web dev concepts and performance optimization techniques.",
      issuer: "Udacity",
      date: "March 2025",
      ImgCard: imgReact,
    },
    {
      title: "Data Structures & Algorithms",
      description:
        "Completed a course on Data Structures & Algorithms with a focus on interview preparation.",
      issuer: "Udacity",
      date: "March 2025",
      ImgCard: Alg,
    },
    {
      title: "Firebase Essentials",
      description:
        "Certificate awarded for completing Firebase Essentials training.",
      issuer: "Code Academy",
      date: "July 2025",
      ImgCard: imgFirebase,
    },
    {
      title: "Test Driven Development",
      description:
        "Certificate awarded for completing Test Driven Development training.",
      issuer: "IEEE",
      date: "July 2025",
      ImgCard: tdd,
    },
  ];

  return (
<section id="Certificates" className="mt-40 px-6 min-h-screen">
      <ScrollAnimation animateIn="fadedown">
        <h2 className="text-center mt-8 text-purple-500 text-[2.5rem] font-semibold">
          Certificates
        </h2>
      </ScrollAnimation>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        {certificates.map((cert, index) => (
          <ScrollAnimation animateIn="zoomIn" key={index}>
            <div className="bg-gradient-to-b from-white to-gray-200 dark:from-gray-600 dark:to-gray-700 
              rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[400px] 
              transition duration-300 hover:scale-105">

              {/* صورة الشهادة */}
              <div className="overflow-hidden">
                <img
                  src={cert.ImgCard}
                  alt="certificate img"
                  className="w-full h-200 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* المحتوى */}
              <div className="p-6 flex flex-col justify-between flex-grow gap-5">
                {/* العنوان والجهة المانحة */}
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-800 dark:text-white leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-300 text-sm mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>

                {/* الوصف */}
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
