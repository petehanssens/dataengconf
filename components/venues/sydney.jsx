export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="/images/venues/sydney-venue.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Sydney - Thursday, 29th September
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Museum of Contemporary Art
            </h3>
            <p className="mt-8 text-lg text-gray-500">
              The Foundation Hall inside the Museum of Contemporary Art
              Australia has been secured for this years DataEngBytes Sydney
              conference.
            </p>
            <div className="mt-5 prose prose-indigo text-gray-500">
              <p>
                Situated in The Rocks, close to public transport options
                including Circular Quay Station, the tram coming off George St
                as well as the Sydney Harbour Bridge and Opera House, it's a
                stunning location that will provide a fun backdrop for an
                amazing day of data engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
