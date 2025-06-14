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
    <header className="fixed top-0 left-0 w-full z-[1000] flex justify-between items-center px-16 py-6 bg-[#21212180] backdrop-blur-lg shadow-md">
      <HashLink
        smooth
        to="#home"
        className="text-white text-4xl font-extrabold tracking-wide flex gap-1"
      >
        <span>{"<Belal "}</span>
        <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {"Edoor/>"}
        </span>
      </HashLink>

      {/* زر تغيير الثيم */}
      <div
  onClick={toggleTheme}
  className="group flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full cursor-pointer shadow-md hover:scale-105 transition-all duration-300 ml-auto mr-4"
>
  <span className="text-base font-semibold group-hover:tracking-wide transition-all duration-300">
    {isDark ? "Light" : "Dark"}
  </span>
  <img
    src={isDark ? sunIcon : moonIcon}
    alt="Theme Icon"
    className="w-[22px] transition-transform duration-300 group-hover:rotate-12"
  />
</div>

      <nav
        className={`flex items-center gap-7 md:flex ${
          isActive
            ? 'flex-col fixed top-0 left-0 w-screen h-screen bg-green-500 z-50'
            : ''
        }`}
      >
        {[
          { to: "#home", label: "Home" },
          { to: "#about", label: "About me" },
          { to: "#project", label: "Projects" },
          { to: "#contact", label: "Contact" },
        ].map(({ to, label }) => (
          <NavHashLink
            key={label}
            smooth
            to={to}
            onClick={closeMenu}
            className="relative text-white text-base font-bold uppercase tracking-wide px-3 py-1 transition-all duration-300 hover:text-green-400"
          >
            <span className="relative z-10">{label}</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
          </NavHashLink>
        ))}

        <a
          href={Resume}
          download
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base font-semibold uppercase tracking-wide px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
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
