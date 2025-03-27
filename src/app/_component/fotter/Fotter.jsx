import React from 'react'
import { FaFacebook, FaXTwitter, FaGithub, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6";
    import { FiMail } from "react-icons/fi";
export default function Footer() {

      return (
        <>
          <div className="bg-gray-900 text-white py-6  ">
            <div className="flex flex-col items-center space-y-4">
              {/* روابط السوشيال ميديا */}
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/profile.php?id=100008232544076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-110 text-white hover:text-blue-500"
                >
                  <FaFacebook size={30} />
                </a>
    
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-110 text-white hover:text-blue-400"
                >
                  <FaXTwitter size={30} />
                </a>
    
                <a
                  href="mailto:dev.ahmedmohammed95@gmail.com"
                  className="transition transform hover:scale-110 text-white hover:text-red-500"
                >
                  <FiMail size={30} />
                </a>
    
                <a
                  href="https://github.com/Ahmed-Mo7ammed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-110 text-white hover:text-gray-500"
                >
                  <FaGithub size={30} />
                </a>
    
                <a
                  href="https://wa.me/201062364985"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-110 text-white hover:text-green-500"
                >
                  <FaWhatsapp size={30} />
                </a>
              </div>
    
              {/* معلومات الاتصال */}
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-red-500" />
                  <span>+2-01062364985</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-yellow-500" />
                  <span>dev.ahmedmohammed95@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
    
          {/* الجزء السفلي من الفوتر */}
          <div className="bg-blue-600 text-white text-center py-3 ">
            <p className="m-0">Design by Ahmed Faisal</p>
          </div>
        </>
      );
    }
    

