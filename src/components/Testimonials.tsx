import img from './photos/darsan.png';

const testimonials = [
  {
    id: 1,
    body: 'I installed a water filtration system from [Your Company Name], and the difference is amazing! The water tastes better, and I feel confident it’s safe for my family. The installation was quick, and the team was very professional. Highly recommend their products!',
    author: {
      name: 'Mr.Gopalakrishnan - Managing Trustee',
      company:'PSG College of art and Science',
      imageUrl: img,
    },
  },
  {
    id: 2,
    body: 'Since installing the water filtration system from Eco tech, our water quality has improved dramatically. It tastes fresher, and I’m no longer worried about contaminants. The installation process was smooth, and the team was very knowledgeable. I can’t recommend them enough!',
    author: {
      name: 'Mr.Ram Kumar - Project Head',
      company:'Sri vaari builders',
      imageUrl: img,
    },
  },
  {
    id: 3,
    body: 'We recently installed a water filtration system from [Your Company Name], and it’s made a noticeable difference in our family’s water quality. It’s great to know we’re drinking clean water straight from our tap. Plus, the local service was quick and friendly. We highly recommend it to our neighbors!',
    author: {
      name: 'Mrs.Pavithra Chandran - GM Operations',
      company:'SM Textiles',
      imageUrl: img,
    },
  },
  // More testimonials...
];

export default function TestimonialsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-semibold leading-8 tracking-tight text-green-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Here is what our valued customers tell about product and work
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-green-200 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img alt="" src={testimonial.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name} <br/> {testimonial.author.company}</div>
                    </div>
                    
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}