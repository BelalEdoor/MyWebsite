import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import sunIcon from '../assets/sun.png'
import moonIcon from '../assets/moon.png'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  function toggleTheme() {
    document.documentElement.classList.toggle('light')
    setIsDark(!isDark)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    function onScroll() {
      const sections = ['home', 'about', 'project', 'contact']
      const scrollPos = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const elem = document.getElementById(section)
        if (elem) {
          const top = elem.offsetTop
          const bottom = top + elem.offsetHeight
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (activeSection) {
      window.history.replaceState(null, '', `#${activeSection}`)
    }
  }, [activeSection])

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
          {isDark ? 'Light' : 'Dark'}
        </span>
        <img
          src={isDark ? sunIcon : moonIcon}
          alt="Theme Icon"
          className="w-[22px] transition-transform duration-300 group-hover:rotate-12"
        />
      </div>

      {/* قائمة التنقل */}
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center gap-7 absolute md:static top-[100%] left-0 w-full md:w-auto 
        ${isDark ? 'bg-[#212121]' : 'bg-white'} 
        md:bg-transparent px-8 md:px-0 py-6 md:py-0 shadow-lg md:shadow-none z-40`}
      >
        {[
          { to: '#home', label: 'Home' },
          { to: '#about', label: 'About me' },
          { to: '#project', label: 'Projects' },
          { to: '#contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <NavHashLink
            key={label}
            smooth
            to={to}
            onClick={closeMenu}
            className="relative px-3 py-2 transition-all duration-300 group"
          >
        <span
  className={`font-bold uppercase tracking-wide relative z-10 px-2 py-1 rounded-md ${
    activeSection === to.substring(1)
      ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'
      : isDark
      ? 'bg-white text-black'
      : 'bg-black text-white'
  }`}
>
  {label}
</span>

            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
          </NavHashLink>
        ))}
      </nav>

      {/* زر البرجر للموبايل */}
      <div
        aria-expanded={menuOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className={`menu relative w-8 h-[2px] bg-white cursor-pointer md:hidden ${
          menuOpen
            ? 'bg-transparent before:rotate-45 before:bottom-0 after:rotate-[135deg] after:top-0'
            : ''
        } before:absolute before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300 before:bottom-[0.5rem] after:absolute after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-300 after:top-[0.5rem]`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></div>
    </header>
  )
}
