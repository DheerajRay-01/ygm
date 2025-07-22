import React from 'react';
import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-3 mt-6">
      {/* Email */}
      <div className="flex items-start gap-4 p-2">
        <div className="p-2 bg-[#2E2E2E] rounded-lg text-[#FFD700]">
          <IoChatbubblesOutline />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#FFD700]">Email Us</h3>
          <p className="text-sm text-[#A0A0A0]">Our team is here to assist you.</p>
          <a
            href="mailto:yashgovindmarketing@gmail.com"
            className="text-sm font-semibold text-[#C0C0C0] mt-1"
          >
            yashgovindmarketing@gmail.com
          </a>
        </div>
      </div>

      {/* Visit */}
      <div className="flex items-start gap-4 p-2">
        <div className="p-2 bg-[#2E2E2E] rounded-lg text-[#FFD700]">
          <HiOutlineLocationMarker />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#FFD700]">Visit Us</h3>
          <p className="text-sm text-[#A0A0A0]">Drop by our office for a discussion.</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=C-202+Dindayal+Complex+Indore+Road+Ujjain+MP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#C0C0C0] mt-1"
          >
            C-202, Dindayal Complex, Indore Road, Ujjain (M.P)
          </a>
        </div>
      </div>

      {/* Call */}
      <div className="flex items-start gap-4 p-2">
        <div className="p-2 bg-[#2E2E2E] rounded-lg text-[#FFD700]">
          <LuPhoneCall />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#FFD700]">Call Us</h3>
          <p className="text-sm text-[#A0A0A0] ">We’re available Mon-Sat, 9 AM - 6 PM.</p>
          <a
            href="tel:+918839059959"
            className=" text-sm font-semibold text-[#C0C0C0] mt-1 "
          >
            📞 88390-59959 &nbsp;
          </a>
          <a
            href="tel:+916260926407"
            className="text-sm font-semibold text-[#C0C0C0]"
          >
            📞 62609-26407
          </a>
        </div>
      </div>


           <div className="flex items-start gap-4 p-2">
        <div className="p-2 bg-[#2E2E2E] rounded-lg text-[#FFD700]">
          <FaWhatsapp />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#FFD700]">WhatsApp Us</h3>
          <p className="text-sm text-[#A0A0A0]">Contact with us instantly on WhatsApp.</p>
          <a
            href="https://wa.me/6260926407?text=Hi%20Yash%20Govind%20Marketing,%20I%20am%20interested%20in%20your%20services."
            className="block text-sm font-semibold text-[#C0C0C0] mt-1"
             target="_blank"
            rel="noopener noreferrer"
          >
             88390-59959
          </a>
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;
