import React, { useRef, useState, useEffect } from 'react'
import { navItems } from '../../constants'
import { useGSAP } from '@gsap/react'
import { RiMenu2Line } from "react-icons/ri"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SideNav from '../SideNav'

gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {
  const desktopNavRef = useRef([])
  const sideNavRef = useRef([])
  const [activeSection, setActiveSection] = useState("about")
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  useGSAP(() => {
    gsap.from(desktopNavRef.current, {
      x: 50,
      opacity: 0,
      stagger: 0.2,
      delay: 0.3,
      duration: 0.5,
      ease: "back.inOut"
    })

    gsap.from(".logo", {
      x: -50,
      opacity: 0,
      delay: 0.3,
      duration: 0.5,
      ease: "back.inOut"
    })
  }, [])

  useEffect(() => {
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
      bg-[#000000]/10 backdrop-blur-md z-50 fixed top-0 left-0 right-0 shadow-md">
      
      {/* Logo */}
      <div className="logo flex items-center">
        <img
          src="/logo.png"
          alt="YGM Logo"
          className="w-15 object-contain py-2"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 font-medium text-[#E0E0E0]">
        {navItems.map((item, idx) => (
          <li
            key={item.id}
            ref={(el) => (desktopNavRef.current[idx] = el)}
            className={`cursor-pointer transition-colors duration-300 ${
              activeSection === item.id
                ? "text-[#FFD700]"
                : "hover:text-[#FFD700]"
            }`}
          >
            <a href={`#${item.id}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden absolute right-5 top-6 z-50"
        onClick={() => setIsSideNavOpen(true)}
        aria-label="Open navigation menu"
      >
        {!isSideNavOpen && <RiMenu2Line size={30} />}
      </button>

      {/* Side Navigation */}
      {isSideNavOpen && (
        <SideNav sideNavRef={sideNavRef} activeSection={activeSection} setIsSideNavOpen={setIsSideNavOpen}/>
      )}
    </nav>
  )
}

export default NavBar
