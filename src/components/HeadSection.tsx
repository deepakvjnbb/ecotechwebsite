import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import bgvideo from './photos/video2.mp4'
import logo from './photos/ecotechlogor2.png'

const navigation = [
  { name: 'Who we are', href: '#whoweare' },
  { name: 'Our Products', href: '#ourproducts' },
  { name: 'Our Projects', href: '#ourprojects' },
  { name: 'What do we do', href: '#whatdowedo' },
  { name: 'Contact us', href: '#contactus' },
]

export default function HeadSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false); // Close the mobile menu after clicking
  }

  return (
    <div id="home" className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-16 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="tel:+91 90952 53000" className="text-md font-semibold leading-6 text-white">
              +91 90952 53000
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Eco Tech</span>
                <img alt="" src={logo} className="h-8 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={handleMobileLinkClick} // Close menu after clicking
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="tel:+91 90952 53000"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    +91 90952 53000
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative z-10 isolate overflow-hidden h-screen">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center relative z-30">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Filtering out impurities, keeping in the goodness
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Experience the power of advanced filtration that removes harmful impurities while preserving essential minerals. Enjoy safe, refreshing water that tastes as good as it looks.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#whoweare"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-300"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}