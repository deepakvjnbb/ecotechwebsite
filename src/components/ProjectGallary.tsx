import proj1 from './project/proj1.jpg'
import proj2 from './project/proj2.jpg'
import proj3 from './project/proj3.jpg'
import proj4 from './project/proj5.jpg'
import proj5 from './project/proj5.jpg'
import proj6 from './project/proj6.jpg'
import proj7 from './project/proj7.jpg'
import proj8 from './project/proj8.jpg'
import proj9 from './project/proj9.jpg'
import proj10 from './project/proj10.jpg'
import proj11 from './project/proj11.jpg'

export default function ProjectGallary() {
    return (
      <div id="ourprojects" className="bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Some of our Project installations</h2>
          <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
          We are proud to showcase a selection of photos from our recent projects. These images highlight our commitment to quality and detail in various installations, from water purification systems to sewage treatment plants. Explore these visuals to gain insight into our expertise and the standards we uphold.
          </p>
        </div>
<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
  <div className="grid gap-4">
    <div className="relative">
      <img
        className=" h-full w-auto rounded-lg object-cover object-center"
        src={proj1}
        alt="gallery-photo"
      />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>
    </div>
    <div className="relative">
      <img
        className="h-full w-auto rounded-lg object-cover object-center "
        src={proj2}      
        alt="gallery-photo"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>
    </div>
    <div className="relative">
      <img
        className="h-full w-auto rounded-lg object-cover object-center"
        src={proj3}       
        alt="gallery-photo"
      />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>

    </div>
  </div>
  <div className="grid gap-4 relative">
  <div>
      <img
        className="h-full w-auto rounded-lg object-cover object-center"
        src={proj4}
        alt="gallery-photo"
      />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>

    </div>
    <div className="relative">
      <img
        className="h-full w-auto rounded-lg object-cover object-center"
        src={proj11}
        alt="gallery-photo"
      />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>

    </div>
    <div className="relative">
      <img
        className="h-full w-auto rounded-lg object-cover object-center "
        src={proj5}
        alt="gallery-photo"
      />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>
    </div>
  </div>
  <div className="grid gap-4 ">
  <div className="relative">
      <img
        className="h-full w-auto rounded-lg object-cover object-center"
        src={proj6}
        alt="gallery-photo"
      />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>
    </div>
    <div className="relative">
      <img
        className="h-full w-auto rounded-lg object-cover object-center "
        src={proj7}       
        alt="gallery-photo"
      />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>
    </div>
    <div className="relative">
      <img
        className="h-full w-auto rounded-lg object-cover object-center"
        src={proj8}
        alt="gallery-photo"
      />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>
    </div>
  </div>
  <div className="grid gap-4">
    <div className='relative'>
      <img
        className="h-full w-auto rounded-lg object-cover object-center"
        src={proj9}
        alt="gallery-photo"
      />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>

    </div>
    
    <div className="relative">
      <img
        className="h-full w-auto rounded-lg object-cover object-center"
        src={proj10}
        alt="gallery-photo"
      />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-lg"></div>

    </div>
  </div>
</div>
</div>
</div>
)
}