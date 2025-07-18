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
<nav className="flex justify-between items-center px-6 
  bg-[#000000]/10 backdrop-blur-md  /* background color updated */
  z-50 fixed top-0 left-0 right-0 shadow-md">
  
  {/* Logo */}
  <div className="logo flex items-center">
    <img
      src="/logo.png"
      alt="YGM Logo"
      className="w-15 object-contain py-2"
    />
  </div>

  {/* Desktop Navigation */}
  <ul className="hidden md:flex gap-8 font-medium text-[#E0E0E0]"> {/* text color updated */}
    {navItems.map((item, idx) => (
      <li
        key={item.id}
        ref={(el) => (desktopNavRef.current[idx] = el)}
        className={`cursor-pointer transition-colors duration-300 ${
          activeSection === item.id
            ? "text-[#FFD700]"               /* active link color updated */
            : "hover:text-[#FFD700]"         /* hover color updated */
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
