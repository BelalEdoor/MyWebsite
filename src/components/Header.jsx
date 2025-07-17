import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import sunIcon from '../assets/sun.png'
import moonIcon from '../assets/moon.png'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  function toggleTheme() {
    const html = document.documentElement
    const isCurrentlyDark = html.classList.contains('dark')
    if (isCurrentlyDark) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setIsDark(!isCurrentlyDark)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  useEffect(() => {
    function onScroll() {
      const sections = ['home', 'about', 'training', 'project', 'contact']
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

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] flex justify-between items-center px-6 md:px-16 py-4 bg-[#21212180] backdrop-blur-lg shadow-md">
      {/* Logo */}
      <HashLink
        smooth
        to="#home"
        className="text-white text-2xl md:text-4xl font-extrabold tracking-wide flex gap-1"
      >
        <span>{"<Eng-Belal "}</span>
        <span className="text-white text-2xl md:text-4xl font-extrabold tracking-wide flex gap-1">
          {" Edoor/>"}
        </span>
      </HashLink>

      {/* Theme toggle */}
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

      {/* Nav links */}
      <nav
        className={`${
          menuOpen ? 'flex bg-[#21213480] bg-blur-4xl text-white' : 'hidden'
        } md:flex flex-col md:flex-row items-center gap-7 absolute md:static top-[100%] left-0 w-full md:w-auto 
        md:bg-transparent md:text-inherit px-8 md:px-0 py-6 md:py-0 shadow-lg md:shadow-none z-40 transition-all duration-300`}
      >
        {[
          { to: '#home', label: 'Home' },
          { to: '#about', label: 'About me' },
          { to: '#training', label: 'Internships' },
          { to: '#project', label: 'Projects' },
          { to: '#contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <NavHashLink
            key={label}
            smooth
            to={to}
            scroll={(el) => {
              const yOffset = -100 // مقدار تعويض ارتفاع النافبار
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
              window.scrollTo({ top: y, behavior: 'smooth' })
            }}
            onClick={closeMenu}
            className="relative px-3 py-2 transition-all duration-300 group"
          >
            <span
              className={`font-bold uppercase tracking-wide relative z-10 px-2 py-1 rounded-md ${
                activeSection === to.substring(1)
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'
                  : isDark
                  ? 'text-white'
                  : 'text-black'
              }`}
            >
              {label}
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
          </NavHashLink>
        ))}
      </nav>

      {/* Burger button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="bg-transparent p-0 m-0  relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] z-50 
               group transition-all duration-300 md:hidden"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`block h-[3px] w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 
            transition-transform duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
        />
        <span
          className={`block h-[3px] w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 
            transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
        />
        <span
          className={`block h-[3px] w-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 
            transition-transform duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
        />
      </button>
    </header>
  )
}
