import prodpic1 from './photos/3m.jpg'
import prodpic2 from './photos/sceletron.jpg'
import prodpic3 from './photos/domesticfilter.webp'
const people = [
  {
    name: 'Purification',
    role: 'Residential / Agricultural',
    imageUrl:prodpic1,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
  },
  {
    name: 'Non chemical Water softners',
    role: 'Residential / Agricultural / Industrial',
    imageUrl:prodpic2,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',

  },
  {
    name: 'Water treatment',
    role: 'Industrial / Residential',
    imageUrl:prodpic1,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',

  },
  {
    name: 'Turnkey projects',
    role: 'Residential / Industrial',
    imageUrl:prodpic3,
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',

  },
  // More people...
]

export default function ProductSection() {
  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sit! Quo eveniet repudiandae aut placeat. Accusantium sequi ipsam nihil ex?
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img alt="" src={person.imageUrl} className="aspect-[3/2] w-full rounded-2xl object-cover" />
              <h3 className="mt-6 text-lg font-bold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base font-semibold leading-7 text-gray-500">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
