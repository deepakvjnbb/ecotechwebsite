import React from "react"
import logo from "./photos/ecotechlogo2024.png"
/*
  This example requires some changes to your config:
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  return (
    <div id="contactus" className=" bg-green-200">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-green-200" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-green-200 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <img src={logo} alt="logo image" width={260}/>
            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2> */}
           
            <dl className="mt-8 text-base text-gray-900">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <h3 className="font-bold"> Registered office </h3>
                  <p>No 45, RVL Nager</p>
                  <p>Kamarajar Road </p>
                  <p>Coimbatore - 641015 </p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-900" />
                  <a href="tel:+91 90952 53000" className="ml-3 hover:text-gray-600" >+91 90952 53000</a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-900" />
                  <a href="mailto:support@ecotech.in" className="ml-3 hover:text-gray-600">support@ecotech.in</a>
                </dd>
              </div>
            </dl>
          
          </div>
        </div>
        <div className="bg-green-200 px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  placeholder="Full name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-500 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-500 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-500 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="block w-full rounded-md border-gray-500 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-green-500 focus:ring-green-500"
                  defaultValue={''}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
