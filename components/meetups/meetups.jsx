
const products = [
    {
      id: 1,
      name: 'Brisbane Data Engineering meetup',
      href: 'https://www.meetup.com/brisbane-data-engineering-meetup/',
      imageSrc: '/images/meetupLogos/brisbane.jpg',
      imageAlt: "Brisbane Data Engineering meetup.",
    },
    {
      id: 2,
      name: 'Hobart Data Engineering meetup',
      href: 'https://www.meetup.com/hobart-data-engineering-meetup/',
      imageSrc: '/images/meetupLogos/hobart.jpg',
      imageAlt: "Hobart Data Engineering meetup.",
    },
    {
      id: 3,
      name: 'Melbourne Data Engineering meetup',
      href: 'https://www.meetup.com/melbourne-data-engineering-meetup/',
      imageSrc: '/images/meetupLogos/melbourne.jpg',
      imageAlt: "Melbourne Data Engineering meetup.",
    },
    {
      id: 4,
      name: 'Perth Data Engineering meetup',
      href: 'https://www.meetup.com/perth-data-engineering-meetup/',
      imageSrc: '/images/meetupLogos/perth.jpg',
      imageAlt: "Perth Data Engineering meetup.",
    },
    {
      id: 5,
      name: 'Sydney Data Engineering meetup',
      href: 'https://www.meetup.com/sydney-data-engineering-meetup/',
      imageSrc: '/images/meetupLogos/sydney.jpg',
      imageAlt: "Sydney Data Engineering meetup.",
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Find your local meetup</h2>
          </div>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-3 sm:aspect-h-2">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
  
          <div className="mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all favorites<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  