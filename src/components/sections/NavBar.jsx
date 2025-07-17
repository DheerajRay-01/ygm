import React, { useRef, useState } from 'react'
import { navItems } from '../../constants'
import { useGSAP } from '@gsap/react'
import { RiMenu2Fill } from "react-icons/ri";
import gsap from 'gsap'

const NavBar = () => {
  const desktopNavRef = useRef([])
  // const mobileNavRef = useRef([])
  // const [showSideNav, setShowSideNav] = useState(false)

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

  // const toggleSideNav = () => {
  //   setShowSideNav(!showSideNav)
  //   if (showSideNav) {
  //     gsap.from(mobileNavRef.current, {
  //       x: 100,
  //       opacity: 0,
  //       stagger: 0.2,
  //       duration: 0.5,
  //       ease: "back.out"
  //     })
  //   }
  // }

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
        className="cursor-pointer hover:text-green-400 transition-colors duration-300"
      >
        {item.name}
      </li>
    ))}
  </ul>
</nav>


  )
}

export default NavBar
