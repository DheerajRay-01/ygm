import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const ContactUs = () => {
  const ContactRightRef = useRef();
  const ContactLeftRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const titleSplit = new SplitText(".contact-title", { type: "words" });

    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top 70%",
        end: "top 30%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    contactTimeline
      .from(titleSplit.words, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.1,
      })
      .from(
        ContactRightRef.current.children,
        {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.2,
        },
        "<50%" // overlaps right side slightly
      )
      .from(
        ContactLeftRef.current,
        {
          x: 80,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        },
        "<30%" // overlaps left side slightly
      );

    return () => {
      contactTimeline.kill();
      titleSplit.revert();
    };
  }, []);

  return (
    <div className="p-6 lg:p-12 contact-container relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://thumbs.dreamstime.com/b/contact-us-background-customer-support-theme-service-176980914.jpg")`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="contact-title text-5xl lg:text-6xl font-extrabold text-center text-white mb-10 drop-shadow-lg">
          Contact Us
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 rounded-xl p-8 lg:p-16 backdrop-blur-[3px] items-start">
          {/* Right Side - Contact Details */}
          <div ref={ContactRightRef} className="flex-1 flex flex-col justify-center gap-5 text-white">
            <h2 className="text-4xl font-bold">Let’s Build Your Workforce</h2>
            <p className="text-lg text-gray-200">
              Whether you need skilled manpower or want to discuss your requirements, our team is ready to help.
              Reach out directly or fill out the form and we’ll connect within <span className="font-semibold text-amber-400">24 hours</span>.
            </p>

            <img
              src="/ygm_logo.png"
              alt="YGM Logo"
              className="w-52 mx-auto "
            />

            <div className="flex flex-col gap-3 mt-6">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-lg hover:text-amber-400 transition"
              >
                <IoCallOutline size={24} /> +91 98765 43210
              </a>
              <a
                href="mailto:info@ygm.com"
                className="flex items-center gap-3 text-lg hover:text-amber-400 transition"
              >
                <MdAlternateEmail size={24} /> info@ygm.com
              </a>
            </div>

            <p className="text-sm text-gray-300 mt-2">
              📞 Call or 📧 email us for quick responses. For detailed inquiries, use the form below.
            </p>
          </div>

          {/* Left Side - Form */}
          <form
            ref={ContactLeftRef}
            className="flex-1 bg-white/90 p-8 rounded-lg shadow-lg space-y-6 text-gray-800"
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
  );
};

export default ContactUs;
