import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import processimg from './process.png';
import processimg from './photos/process1.png';


export default function WhatwedoSection() {
    return (
      <div id="whatdowedo" className="bg-white py-6 md:py-8 lg:py-10 ">
            <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">Filtering Process</h2>
        <div className="mt-10 flex justify-center space-x-10">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <img src={processimg} alt="" width={500} height={800}/>
          <span className="sr-only">WhatsApp</span>
          </a>
          </div>
          </div>
    )
}