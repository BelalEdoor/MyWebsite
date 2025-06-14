import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import Resume from '../assets/My_Resume-Bilal_Edoor.pdf'
import sunIcon from '../assets/sun.png'
import moonIcon from '../assets/moon.png'

export function Header() {
  const [isActive, setActive] = useState(false)
  const [isDark, setIsDark] = useState(false)

  function toggleTheme() {
    document.documentElement.classList.toggle('light')
    setIsDark(!isDark)
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <header className="fixed top-0 left-0 w-screen z-[1000] flex justify-between items-center px-[10rem] py-[1.8rem] bg-[#21212180] backdrop-blur-md">
      <HashLink
        smooth
        to="#home"
        className="logo text-white text-[2.8rem] font-bold flex gap-1"
      >
        <span>{"<Belal "}</span>
        <span>{" Edoor/>"}</span>
      </HashLink>

      {/* زر تغيير الثيم */}
      <div
        onClick={toggleTheme}
    className="bg-green-500 hover:bg-green-600 text-white h-10 px-10 py-6 rounded-full cursor-pointer flex items-center ml-auto mr-4"
      >
        <span>{isDark ? "Light" : "Dark"}</span>
        <img
          src={isDark ? sunIcon : moonIcon}
          alt="Theme Icon"
          className="w-[25px] ml-2"
        />
      </div>

      <nav
        className={`flex items-center gap-[1.8rem] md:flex ${
          isActive
            ? 'flex-col fixed top-0 left-0 w-screen h-screen bg-green-500 opacity-100 visible z-50'
            : 'opacity-100 visible'
        }`}
      >
        <NavHashLink
          smooth
          to="#home"
          onClick={closeMenu}
          className="text-white font-medium uppercase px-2 hover:brightness-75"
        >
          Home
        </NavHashLink>
        <NavHashLink
          smooth
          to="#about"
          onClick={closeMenu}
          className="text-white font-medium uppercase px-2 hover:brightness-75"
        >
          About me
        </NavHashLink>
        <NavHashLink
          smooth
          to="#project"
          onClick={closeMenu}
          className="text-white font-medium uppercase px-2 hover:brightness-75"
        >
          Projects
        </NavHashLink>
        <NavHashLink
          smooth
          to="#contact"
          onClick={closeMenu}
          className="text-white font-medium uppercase px-2 hover:brightness-75"
        >
          Contact
        </NavHashLink>
        <a
          href={Resume}
          download
          className="button bg-pink-500 text-white px-6 py-1 rounded uppercase font-medium hover:brightness-75"
        >
          Resume
        </a>
      </nav>

      {/* زر القائمة الجانبية (موبايل) */}
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={`menu relative w-8 h-[2px] bg-white cursor-pointer md:hidden ${
          isActive
            ? 'bg-transparent before:rotate-45 before:bottom-0 after:rotate-[135deg] after:top-0'
            : ''
        } before:absolute before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300 before:bottom-[0.5rem] after:absolute after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300 after:top-[0.5rem]`}
        onClick={() => setActive(!isActive)}
      ></div>
    </header>
  )
}
