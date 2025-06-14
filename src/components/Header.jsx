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
  className={`${
    isActive ? 'flex' : 'hidden'
  } md:flex flex-col md:flex-row items-center gap-7 absolute md:static top-[100%] left-0 w-full md:w-auto bg-[#212121] md:bg-transparent px-8 md:px-0 py-6 md:py-0 shadow-lg md:shadow-none z-40`}
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
      className="relative text-white text-base font-bold uppercase tracking-wide px-3 py-2 transition-all duration-300 hover:text-green-400"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
    </NavHashLink>
  ))}

  <a
    href={Resume}
    download
    onClick={closeMenu}
    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-base font-semibold uppercase tracking-wide px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
  >
    Resume
  </a>
</nav>

      {/* زر القائمة الجانبية (موبايل) */}
      <div
  aria-expanded={isActive ? 'true' : 'false'}
  aria-haspopup="true"
  aria-label={isActive ? 'Close menu' : 'Open menu'}
  className="relative z-50 flex flex-col justify-between w-8 h-6 cursor-pointer md:hidden"
  onClick={() => setActive(!isActive)}
>
  <span
    className={`block h-1 bg-white rounded transition-all duration-300 ${
      isActive ? 'rotate-45 translate-y-2' : ''
    }`}
  />
  <span
    className={`block h-1 bg-white rounded transition-all duration-300 ${
      isActive ? 'opacity-0' : ''
    }`}
  />
  <span
    className={`block h-1 bg-white rounded transition-all duration-300 ${
      isActive ? '-rotate-45 -translate-y-2' : ''
    }`}
  />
</div>

    </header>
  )
}
