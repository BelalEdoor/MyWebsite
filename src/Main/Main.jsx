import React from "react";
import Particles from "react-tsparticles";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Project } from "../components/Project";
import TrainingSection from "../components/TrainingSection";

export function Main() {

  return (
    <main className="relative z-0 overflow-x-hidden px-40 md:px-16 xs:px-8">
      <Particles
        id="tsparticles"
      
        className="absolute inset-0 w-full h-full -z-10"
      />
      <Hero />
      <About />
      <TrainingSection/>
      <Project />
      <Contact />
    </main>
  );
}
