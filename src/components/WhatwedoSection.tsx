import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import processimg from './process.png';
import processimg from './photos/process.png';


export default function WhatwedoSection() {
    return (
        <div className="mt-10 flex justify-center space-x-10">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <img src={processimg} alt="" />
          <span className="sr-only">WhatsApp</span>
          </a>
          </div>
    )
}