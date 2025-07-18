import React, { useRef, useState, useEffect } from 'react'
import { navItems } from '../../constants'
import { useGSAP } from '@gsap/react'
import { RiMenu2Fill } from "react-icons/ri";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {
  const desktopNavRef = useRef([])
  const [activeSection, setActiveSection] = useState("about") // default to first section

  useGSAP(() => {
    // Animate desktop nav items
    gsap.from(desktopNavRef.current, {
      x: 50,
      opacity: 0,
      stagger: 0.2,
      delay: 0.3,
      duration: 0.5,
      ease: "back.inOut"
    })

    // Animate logo
    gsap.from(".logo", {
      x: -50,
      opacity: 0,
      delay: 0.3,
      duration: 0.5,
      ease: "back.inOut"
    })
  }, [])

  useEffect(() => {
    // Setup ScrollTrigger for active link
    navItems.forEach((item) => {
      ScrollTrigger.create({
        trigger: `#${item.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(item.id),
        onEnterBack: () => setActiveSection(item.id),
      })
    })

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])

  return (
<nav className="flex justify-between items-center px-6 py-2 
  bg-white/10 backdrop-blur-md
  z-50 fixed top-0 left-0 right-0 shadow-md">
  {/* Logo */}
  <div className="logo flex items-center">
    <img
      src="/ygm_logo.png"
      alt="YGM Logo"
      className="w-28 md:w-32 object-contain"
    />
  </div>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex gap-8 font-medium text-white">
    {navItems.map((item, idx) => (
      <li
        key={item.id}
        ref={(el) => (desktopNavRef.current[idx] = el)}
        className={`cursor-pointer transition-colors duration-300 ${
          activeSection === item.id ? "text-green-400" : "hover:text-green-400"
        }`}
      >
        <a href={`#${item.id}`}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</nav>
  )
}

export default NavBar
