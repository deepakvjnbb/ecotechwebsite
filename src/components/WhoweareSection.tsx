import React from "react"
export default function WhoweareSection() {
    return (
      <div id="whoweare" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Who we are </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
            As a team of young engineering entrepreneurs, we are dedicated to providing reliable water purification and sewage treatment solutions for more than 11 years. Our focus is on ensuring safe, clean water and efficient waste management for households and businesses in the community, combining innovation with local expertise.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-blue-200 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-32">
  <p className="flex-none text-3xl font-bold tracking-tight text-black mb-1">Every $1 dollar</p> {/* Added mb-1 to reduce gap */}
  <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
    <p className="text-lg font-semibold tracking-tight text-black">invested in clean water and sanitation yields an average return of $4-12 in economic growth due to improved health and productivity.</p>
 
  </div>
</div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-200 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">2.5%</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-gray-900">of the Earth’s water is freshwater. The rest, 97.5%, is saltwater in the oceans.</p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-green-200 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">20,000 gallons</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-black"> On average, a family can save up to 20,000 gallons of water each year by making simple changes, such as fixing leaks, installing low-flow fixtures, and using water-efficient appliances .</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  