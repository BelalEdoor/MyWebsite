import React from "react";
import Particles from "react-tsparticles";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Project } from "../components/Project";

import python from "../assets/python.svg";
import java from "../assets/java.svg";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import sassIcon from "../assets/sass-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import reactIcon from "../assets/react-icon.svg";

export function Main() {
  const particlesOptions = {
    fullScreen: { enable: true, zIndex: 1 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "bubble" },
      },
      modes: {
        bubble: { distance: 400, duration: 2, opacity: 0.8, size: 2 },
        push: { quantity: 2 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      move: { enable: true, speed: 2, outMode: "out" },
      number: { value: 15, density: { enable: true, area: 800 } },
      opacity: { value: 1, random: true, animation: { enable: true, speed: 1, minimumValue: 0.2 } },
      rotate: { value: 0, random: true, direction: "random", animation: { enable: true, speed: 5 } },
      shape: {
        type: "image",
        image: [
          { src: cssIcon, width: 20, height: 20 },
          { src: htmlIcon, width: 20, height: 20 },
          { src: jsIcon, width: 20, height: 20 },
          { src: python, width: 20, height: 20 },
          { src: java, width: 20, height: 20 },
          { src: reactIcon, width: 20, height: 20 },
          { src: sassIcon, width: 20, height: 20 },
        ],
      },
      size: { value: 16 },
    },
    background: { image: "", position: "50% 50%", repeat: "no-repeat", size: "cover" },
  };

  return (
    <main className="relative z-0 overflow-x-hidden px-40 md:px-16 xs:px-8">
      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="absolute inset-0 w-full h-full -z-10"
      />
      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
