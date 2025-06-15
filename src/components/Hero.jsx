import { NavHashLink } from "react-router-hash-link";
import ScrollAnimation from "react-animate-on-scroll";
import main from "../assets/main.png";
import linkedin from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsapp from '../assets/whatsapp.svg';
import telegram from '../assets/telegram.svg';

export function Hero() {
  return (
    <section
      id="home"
      className="pt-[15%] flex justify-between gap-32 bg-transparent max-md:block max-md:mt-[15%] max-sm:mt-[35%] max-xs:mt-[45%]"
    >
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p className="text-[1.8rem] flex items-center gap-1 dark:text-white">
            Hello I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200}>
          <h1 className="text-[7rem] max-md:text-[5rem] dark:text-white">Belal Edoor</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={400}>
<h2 className="my-4 text-[2rem] bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
  Software Engineer
</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={600}>
          <p className="mb-20 dark:text-white">2 Year Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={800}>
         <NavHashLink
  smooth
  to="#contact"
  className="mt-20 inline-block px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
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

      <div className="hero-image max-md:hidden" style={{ transform: 'translateY(-160px)' }}>
        <ScrollAnimation animateIn="fadeInRight" delay={1000}>
          <img src={main} alt="Ilustração" className="max-w-[600px]" />
        </ScrollAnimation>
      </div>
    </section>
  )
}
