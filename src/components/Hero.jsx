import { NavHashLink } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../assets/illustration.svg";
import linkedin from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsapp from '../assets/whatsapp.svg';
import Hello from '../assets/Hello.gif';
import telegram from '../assets/telegram.svg';

export function Hero() {
  return (
    <section
      id="home"
      className="pt-[15%] flex justify-between gap-32 bg-transparent max-md:block max-md:mt-[15%] max-sm:mt-[35%] max-xs:mt-[45%]"
    >
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="text-[1.8rem] flex items-center gap-1">
            Hello <img src={Hello} alt="Hello" width="20px" />
            , I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1 className="text-[7rem] max-md:text-[5rem]">Belal Edoor</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400}>
          <h3 className="text-green-500 my-4">Software Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={600}>
          <p className="mb-20">2 Year Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={800}>
          <NavHashLink
            smooth
            to="#contact"
            className="button mt-20 inline-block px-24 py-5 bg-blue-600 text-white rounded uppercase"
          >
            Contact With Me
          </NavHashLink>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <div className="social-media inline-flex items-center gap-4 pt-20 pl-4">
            <a
              href="https://www.linkedin.com/in/%D8%A8%D9%84%D8%A7%D9%84-%D8%B9%D8%AF%D9%88%D8%B1-56544230b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" className="w-[3.5rem]" />
            </a>
            <a href="https://github.com/BilalEdoor" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" className="w-[3.5rem]" />
            </a>
            <a href="https://wa.me/+970568033525" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" className="w-[3.5rem]" />
            </a>
            <a href="https://t.me/Bilal_edoor" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" className="w-[3.5rem]" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image max-md:hidden">
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={Illustration} alt="Ilustração" className="max-w-[500px]" />
        </ScrollAnimation>
      </div>
    </section>
  )
}
