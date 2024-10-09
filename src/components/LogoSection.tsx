import clogo1 from './clogo/ELGi.png'
import clogo2 from './clogo/ayur.png'
import clogo3 from './clogo/lcc.png'
import clogo4 from './clogo/ntc.png'
import clogo5 from './clogo/psg.png'

export default function LogoSection() {
  return (
    <div className="bg-green-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the Coimbatore's Most valued brands 
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src={clogo1}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src={clogo2}          
            width={500}
            height={200}
            className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src={clogo3}
            width={158}
            height={48}
            className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
          />
          <img
            src={clogo4}
            alt="SavvyCal"
            width={158}
            height={48}
            className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src={clogo5}
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-36 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}
