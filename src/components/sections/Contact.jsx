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
        <div className="p-1 md:p-6 contact-container relative  mt-5">
          <div className="relative w-full ">
    
    
            <div className="flex flex-col  lg:flex-row gap-10 rounded-xl p-4 lg:p-16 backdrop-blur-[3px] items-start">
              {/* Right Side - Contact Details */}
              <div ref={ContactRightRef} className="flex-1 flex flex-col justify-center  ">
                        <h1 className="contact-title text-4xl lg:text-6xl font-extrabold  mb-10 drop-shadow-lg">
              Contact Us
            </h1>
                <h2 className="text-4xl font-bold">Let’s Build Your Workforce</h2>
                <p className="text-lg ">
                 Need skilled manpower or have requirements to discuss? Contact us directly or fill the form. we’ll respond within 24 hours.       </p>
    
                {/* <img
                  src="/ygm_logo.png"
                  alt="YGM Logo"
                  className="w-52 mx-auto "
                /> */}
    
                <div className="flex flex-col gap-3 mt-6 text-black">
                
                </div>
             <div className="flex flex-col gap-3">
  {/* Contact Card */}
  {contactInfo.map((item, i) => (
    <div
      key={i}
      className="flex items-start gap-4 p-2"
    >
      <div className="p-2 bg-gray-100 rounded-lg text-gray-700">{item.icon}</div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.desc}</p>
        <p className="text-sm font-semibold text-gray-800 mt-1 whitespace-pre-line">
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
                className="flex-1 px-2 md:px-8 py-8  rounded-3xl border-3 border-amber-600 space-y-6 text-gray-800"
              >
                <h3 className="text-2xl font-semibold mb-2">Request a Callback</h3>
                <p className="text-gray-600 text-sm">
                  Fill out the details and our team will connect with you within 24 hours.
                </p>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-b border-gray-400 focus:border-amber-500 px-2 py-2 w-full bg-transparent focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="border-b border-gray-400 focus:border-amber-500 px-2 py-2 w-full bg-transparent focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="border-b border-gray-400 focus:border-amber-500 px-2 py-2 w-full bg-transparent focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border-b border-gray-400 focus:border-amber-500 px-2 py-2 w-full bg-transparent focus:outline-none"
                  />
                  <select
                    className="border-b border-gray-400 focus:border-amber-500 px-2 py-2 w-full bg-transparent focus:outline-none"
                  >
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
                    className="border-b border-gray-400 focus:border-amber-500 px-2 py-2 w-full bg-transparent focus:outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Number of Employees Needed"
                    className="border-b border-gray-400 focus:border-amber-500 px-2 py-2 w-full bg-transparent focus:outline-none"
                  />
                  <select
                    className="border-b border-gray-400 focus:border-amber-500 px-2 py-2 w-full bg-transparent focus:outline-none"
                  >
                    <option>Type of Workforce</option>
                    <option>Skilled</option>
                    <option>Semi-skilled</option>
                    <option>Unskilled</option>
                  </select>
                </div>
    
                <textarea
                  placeholder="Additional Details (optional)"
                  rows="2"
                  className="border-b border-gray-400 focus:border-amber-500 px-2 py-2 w-full bg-transparent focus:outline-none"
                ></textarea>
    
                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition text-lg font-medium"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Contact