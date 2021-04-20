import React from 'react';

const sponsorLogo = [
    {
      name: 'Snowflake',
      image: 'images/sponsors/snowflake.png',
      url: 'https://www.snowflake.com/',
    },
    {
      name: 'Fivetran',
      image: 'images/sponsors/fivetran.png',
      url: 'https://fivetran.com/',
    },
    {
      name: 'Databricks',
      image: 'images/sponsors/databricks.png',
      url: 'https://databricks.com/',
    },
    {
      name: 'Imply',
      image: 'images/sponsors/imply.png',
      url: 'https://imply.io/',
    },
    {
      name: 'Versor',
      image: 'images/sponsors/VersorWIDELogo.png',
      url: 'https://www.versor.com.au/',
    },
    {
      name: 'dbt',
      image: 'images/sponsors/dbt-logo-full.png',
      url: 'https://www.getdbt.com/',
    },
    {
      name: 'YOW Conferences',
      image: 'images/sponsors/yow.png',
      url: 'https://yowconference.com/data/',
    },
    {
      name: 'Cloud Shuttle',
      image: 'images/sponsors/new-cloudshuttle-logo.png',
      url: 'https://www.cloudshuttle.com.au/',
    },
]

export default function Sponsors() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Special thanks to our amazing sponsors!
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {sponsorLogo.map((sponsor) => (
            <div key={sponsor.name}
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <a href={sponsor.url}>
                <img
                  className="max-h-12"
                  src={sponsor.image}
                  alt={sponsor.name}
                />
              </a>
            </div>
          ))}
          </div>
        </div>
      </div>
    )
  }
  