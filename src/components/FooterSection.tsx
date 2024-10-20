import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
const navigation = {
    main: [
      { name: 'Who we are', href: 'whoweare' },
      { name: 'Our Products', href: 'ourproducts' },
      { name: 'What do we do', href: 'whatdowedo' },
      { name: 'Our Projects', href: 'ourprojects' },
      { name: 'Contact us', href: 'contactus' },
    ],
  }
  export default function FooterSection() {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav aria-label="Footer" className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12">
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a href={item.href} className="text-md leading-6 text-gray-600 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
          <a href="https://www.instagram.com/ecotech_water_treatments" className="text-gray-500 hover:text-gray-900">
          <span className="sr-only">Instagram</span>
          <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
          </a>
           <a href="https://www.youtube.com" className="text-gray-500 hover:text-gray-900">
          <span className="sr-only">YouTube</span>
          <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
          </a>
          <a href="https://wa.me/+919095253000" className="text-gray-500 hover:text-gray-900">
          <span className="sr-only">WhatsApp</span>
          <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6"/>
          </a>
          </div>
          <p className="mt-10 text-center text-sm leading-5 text-gray-500">
            &copy; 2024. Eco tech. All rights reserved. 
          </p>
          </div>
       
      </footer>
    )
  }