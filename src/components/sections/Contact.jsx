import React, { useRef } from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";

function Contact() {

      const ContactRightRef = useRef();
      const ContactLeftRef = useRef()

const contactInfo =[
    {
      icon: <IoChatbubblesOutline size={30} />,
      title: "Chat to us",
      desc: "Our team is here to help",
      info: "hi@ymp.com",
    },
    {
      icon: <HiOutlineLocationMarker size={30} />,
      title: "Visit us",
      desc: "Come to say hello at our office HQ.",
      info: "Near Shivaji Park\nUjjain, MP",
    },
    {
      icon: <LuPhoneCall size={30} />,
      title: "Call us",
      desc: "We’re available Mon-Fri, 9am to 6pm.",
      info: "+91 98765 43210",
    },
  ]

  return (
<div className="p-1 md:p-6 contact-container relative mt-5">
  <div className="relative w-full">
    <div className="flex flex-col lg:flex-row gap-10 p-4 lg:p-16 items-start rounded-2xl overflow-hidden text-[#E0E0E0]"> {/* color updated */}
      
      {/* Right Side - Contact Details */}
      <div ref={ContactRightRef} className="flex-1 flex rounded-2xl overflow-hidden flex-col z-10 justify-center">
        <h1 className="contact-title text-4xl lg:text-6xl font-extrabold text-[#FFD700] mb-10 drop-shadow-lg"> {/* color updated */}
          Contact Us
        </h1>
        <h2 className="text-4xl font-bold text-[#FFD700]">Let’s Build Your Workforce</h2> {/* color updated */}
        <p className="text-lg text-[#C0C0C0]"> {/* color updated */}
          Need skilled manpower or have requirements to discuss? Contact us directly or fill the form. We’ll respond within 24 hours.
        </p>

        <div className="flex flex-col gap-3 mt-6 text-[#000000]"> {/* color updated */}
        </div>

        <div className="flex flex-col gap-3">
          {/* Contact Card */}
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-2"
            >
              <div className="p-2 bg-[#2E2E2E] rounded-lg text-[#FFD700]"> {/* color updated */}
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#FFD700]"> {/* color updated */}
                  {item.title}
                </h3>
                <p className="text-sm text-[#A0A0A0]"> {/* color updated */}
                  {item.desc}
                </p>
                <p className="text-sm font-semibold text-[#C0C0C0] mt-1 whitespace-pre-line"> {/* color updated */}
                  {item.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Side - Form */}
      <form
        ref={ContactLeftRef}
        className="flex-1 px-2 md:px-8 py-8 rounded-3xl border-3 border-[#FFD700] space-y-6 text-[#000000]"> {/* color updated */}
        <h3 className="text-2xl font-semibold mb-2 text-[#FFD700]">Request a Callback</h3> {/* color updated */}
        <p className="text-[#A0A0A0] text-sm"> {/* color updated */}
          Fill out the details and our team will connect with you within 24 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border-b border-[#C0C0C0] focus:border-[#FFD700] placeholder-[#A0A0A0] px-2 py-2 w-full bg-transparent focus:outline-none" /> {/* color updated */}
          <input
            type="email"
            placeholder="Work Email"
            className="border-b border-[#C0C0C0] focus:border-[#FFD700] placeholder-[#A0A0A0] px-2 py-2 w-full bg-transparent focus:outline-none" /> {/* color updated */}
          <input
            type="text"
            placeholder="Company Name"
            className="border-b border-[#C0C0C0] focus:border-[#FFD700] placeholder-[#A0A0A0] px-2 py-2 w-full bg-transparent focus:outline-none" /> {/* color updated */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="border-b border-[#C0C0C0] focus:border-[#FFD700] placeholder-[#A0A0A0] px-2 py-2 w-full bg-transparent focus:outline-none" /> {/* color updated */}
          <select
            className="border-b border-[#C0C0C0] focus:border-[#FFD700] text-[#A0A0A0] px-2 py-2 w-full bg-transparent focus:outline-none"> {/* color updated */}
            <option>Company Type</option>
            <option>Manufacturing</option>
            <option>IT / Software</option>
            <option>Logistics</option>
            <option>Construction</option>
            <option>Healthcare</option>
            <option>Others</option>
          </select>
          <input
            type="text"
            placeholder="Work Location (City, State)"
            className="border-b border-[#C0C0C0] focus:border-[#FFD700] placeholder-[#A0A0A0] px-2 py-2 w-full bg-transparent focus:outline-none" /> {/* color updated */}
          <input
            type="number"
            placeholder="Number of Employees Needed"
            className="border-b border-[#C0C0C0] focus:border-[#FFD700] placeholder-[#A0A0A0] px-2 py-2 w-full bg-transparent focus:outline-none" /> {/* color updated */}
          <select
            className="border-b border-[#C0C0C0] focus:border-[#FFD700] text-[#A0A0A0] px-2 py-2 w-full bg-transparent focus:outline-none"> {/* color updated */}
            <option>Type of Workforce</option>
            <option>Skilled</option>
            <option>Semi-skilled</option>
            <option>Unskilled</option>
          </select>
        </div>

        <textarea
          placeholder="Additional Details (optional)"
          rows="2"
          className="border-b border-[#C0C0C0] focus:border-[#FFD700] placeholder-[#A0A0A0] px-2 py-2 w-full bg-transparent focus:outline-none"></textarea> {/* color updated */}

        <button
          type="submit"
          className="w-full bg-[#FFD700] text-[#000000] py-3 rounded-lg hover:bg-[#C5A017] transition text-lg font-medium"> {/* color updated */}
          Submit Request
        </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Contact