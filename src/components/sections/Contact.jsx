import React, { useRef, useEffect } from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const ContactRightRef = useRef();
  const ContactLeftRef = useRef();

  const contactInfo = [
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
  ];

  useEffect(() => {
    // Animate right section (contact info) from left
    gsap.from(ContactRightRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ContactRightRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate left section (form) from right
    gsap.from(ContactLeftRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ContactLeftRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="p-1 md:p-6 contact-container relative mt-5">
      <div className="relative w-full">
        <div className="flex flex-col lg:flex-row gap-10 p-4 lg:p-16 items-start rounded-2xl overflow-hidden">
          {/* Right Side - Contact Details */}
          <div
            ref={ContactRightRef}
            className="flex-1 flex rounded-2xl overflow-hidden flex-col z-10 justify-center"
          >
            <h1 className="contact-title text-4xl lg:text-6xl font-extrabold mb-10 drop-shadow-lg">
              Contact Us
            </h1>
            <h2 className="text-4xl font-bold">Let’s Build Your Workforce</h2>
            <p className="text-lg">
              Need skilled manpower or have requirements to discuss? Contact us
              directly or fill the form. We’ll respond within 24 hours.
            </p>

            <div className="flex flex-col gap-3 mt-6 text-black"></div>
            <div className="flex flex-col gap-3">
              {/* Contact Card */}
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-2"
                >
                  <div className="p-2 bg-gray-100 rounded-lg text-gray-700">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
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
            className="flex-1 px-2 md:px-8 py-8 rounded-3xl bg-amber-500 backdrop-blur-xl text-white space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-2">Request a Callback</h3>
            <p className="text-white text-sm">
              Fill out the details and our team will connect with you within 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="font-bold bg-transparent border-b border-white/50 focus:border-white focus:ring-0 px-2 py-2 w-full text-white placeholder-white focus:outline-none transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Work Email"
                className="font-bold bg-transparent border-b border-white/50 focus:border-white focus:ring-0 px-2 py-2 w-full text-white placeholder-white focus:outline-none transition-colors duration-300"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="font-bold bg-transparent border-b border-white/50 focus:border-white focus:ring-0 px-2 py-2 w-full text-white placeholder-white focus:outline-none transition-colors duration-300"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="font-bold bg-transparent border-b border-white/50 focus:border-white focus:ring-0 px-2 py-2 w-full text-white placeholder-white focus:outline-none transition-colors duration-300"
              />
              <select
                className="font-bold bg-transparent border-b border-white/50 focus:border-white focus:ring-0 px-2 py-2 w-full text-white focus:outline-none transition-colors duration-300"
              >
                <option className="text-gray-800">Company Type</option>
                <option className="text-gray-800">Manufacturing</option>
                <option className="text-gray-800">IT / Software</option>
                <option className="text-gray-800">Logistics</option>
                <option className="text-gray-800">Construction</option>
                <option className="text-gray-800">Healthcare</option>
                <option className="text-gray-800">Others</option>
              </select>
              <input
                type="text"
                placeholder="Work Location (City, State)"
                className="font-bold bg-transparent border-b border-white/50 focus:border-white focus:ring-0 px-2 py-2 w-full text-white placeholder-white focus:outline-none transition-colors duration-300"
              />
              <input
                type="number"
                placeholder="Number of Employees Needed"
                className="font-bold bg-transparent border-b border-white/50 focus:border-white focus:ring-0 px-2 py-2 w-full text-white placeholder-white focus:outline-none transition-colors duration-300"
              />
              <select
                className="font-bold bg-transparent border-b border-white/50 focus:border-white focus:ring-0 px-2 py-2 w-full text-white focus:outline-none transition-colors duration-300"
              >
                <option className="text-gray-800">Type of Workforce</option>
                <option className="text-gray-800">Skilled</option>
                <option className="text-gray-800">Semi-skilled</option>
                <option className="text-gray-800">Unskilled</option>
              </select>
            </div>

            <textarea
              placeholder="Additional Details (optional)"
              rows="2"
              className="font-bold bg-transparent border-b border-white/50 focus:border-white focus:ring-0 px-2 py-2 w-full text-white placeholder-white focus:outline-none transition-colors duration-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-amber-600 py-3 rounded-lg hover:bg-gray-100 transition text-lg font-medium"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
