import prodpic1 from './prod/Purifier.jpg'
import prodpic2 from './prod/ROPlant.jpg'
import prodpic3 from './prod/ManualSoftenerPlant.jpg'
import prodpic4 from './prod/Scalatronzerosoftner.jpg'
import prodpic5 from './prod/DMPlant.jpg'
import prodpic6 from './prod/autosoftner.jpg'
import prodpic7 from './prod/STP.jpg'
import prodpic8 from './prod/turnkey.jpg'





const people = [
  {
    name: 'Water Purifiers',
    role: 'Residential / Agricultural',
    imageUrl:prodpic1,
    bio: 'Our home water purifier provides safe, clean drinking water using advanced filtration. Compact and easy to install, it ensures your family enjoys pure, great-tasting water for better health.',
  },
  {
    name: 'RO Plants',
    role: 'Residential / Agricultural / Industrial',
    imageUrl:prodpic2,
    bio: 'Our RO plant utilizes advanced reverse osmosis technology to purify water by removing impurities, contaminants, and dissolved solids. Efficient and reliable, it ensures a continuous supply of clean water for various applications, from residential to industrial use.',

  },
  {
    name: 'Water softners',
    role: 'Residential / Agricultural / Industrial',
    imageUrl:prodpic3,
    bio: 'Our water softeners effectively eliminate hard minerals such as calcium and magnesium, preventing scale buildup in pipes and appliances. By replacing these minerals with sodium or potassium ions, our systems produce softer water that enhances cleaning efficiency and extends the lifespan of your appliances.',

  },
  {
    name: 'Sand filters',
    role: 'Residential / Agricultural / Industrial',
    imageUrl:prodpic4,
    bio: 'Our sand filters are designed to efficiently remove impurities and sediments from water through layers of sand and gravel. Perfect for residential and commercial use, they ensure high water quality and require minimal maintenance for optimal performance.',

  },
  {
    name: 'DM Plants',
    role: 'Industrial / Residential',
    imageUrl:prodpic5,
    bio: 'Demineralization plants remove dissolved minerals from water, producing high-purity water suitable for industrial applications and laboratory use. Utilizing ion exchange resins, these plants effectively reduce conductivity and ensure optimal water quality.',

  }, 
   {
    name: 'Swimming pool filteration',
    role: 'Residential / Industrial',
    imageUrl:prodpic6,
    bio: 'Swimming pool filtration systems maintain clean and clear water by removing dirt, debris, and contaminants. Using a combination of mechanical, chemical, and biological processes, these systems ensure safe swimming conditions while enhancing water clarity and sanitation.',

  },
  {
    name: 'STP',
    role: 'Residential / Industrial',
    imageUrl:prodpic7,
    bio: 'We undertake the supply and installation of sewage treatment plants (STPs) that effectively process and treat wastewater from homes and industries. Our systems utilize advanced physical, chemical, and biological methods to ensure contaminants and pathogens are removed, resulting in treated effluent that meets regulatory standards for safe discharge or reuse.',

  },
  {
    name: 'Turnkey projects',
    role: 'Residential / Industrial',
    imageUrl:prodpic8,
    bio: 'We undertake various turnkey projects, managing everything from design and construction to installation. This ensures clients receive a fully operational facility that meets all requirements, allowing them to simply “turn the key” and begin operations.',

  },
  // More people...
]

export default function ProductSection() {
  return (
    <div id="ourproducts" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Our water purifiers provide clean and safe drinking water by effectively removing impurities and contaminants. Using advanced filtration methods like Reverse Osmosis (RO) and Ultraviolet (UV) light, our products ensure that you enjoy great-tasting water while promoting a healthier lifestyle. With efficient designs, they are easy to use and maintain, making pure water accessible for you and your family.
           </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
    {people.map((person) => (
  <li key={person.name} className="relative">
    <div className="relative">
      <img
        alt=""
        src={person.imageUrl}
        className="aspect-[3/2] w-full rounded-2xl object-cover"
      />
      <div className="absolute inset-0 bg-green-200 bg-opacity-20 rounded-2xl"></div>
    </div>
    <h3 className="mt-6 text-lg font-bold leading-8 text-gray-900">{person.name}</h3>
    <p className="text-base font-semibold leading-7 text-gray-500">{person.role}</p>
    <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
    <ul role="list" className="mt-6 flex gap-x-6"></ul>
  </li>
))}
        </ul>
      </div>
    </div>
  )
}
