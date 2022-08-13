/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: 'Toxina Botulínica',
        href: '#',
        imageSrc: 'https://clarityct.com/wp-content/uploads/2019/08/800x515-top-aesthetic-treatments-for-men.jpg',
        imageAlt: "Tratamiento con toxina botulínica.",
        price: 'Consultar',
        brand: 'Botox',
      },
      {
        id: 1,
        name: 'Rellenos dérmicos',
        href: '#',
        imageSrc: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/07/05/Pictures/_9cbcb14c-803e-11e8-8bd0-affd130bd192.jpg',
        imageAlt: "Tratamiento de relleno dérmico.",
        price: 'Consultar',
        brand: 'Restylane',
      },
      {
        id: 1,
        name: 'Anti celulitis',
        href: '#',
        imageSrc: 'https://www.innoaesthetics.com/wp-content/uploads/2020/11/foto_piernas-_mesoterapia-1024x760.jpg',
        imageAlt: "Tratamiento anti celulitis.",
        price: 'Consultar',
        brand: 'Cellutrix',
      },
      {
        id: 1,
        name: 'Estimulación capilar',
        href: '#',
        imageSrc: 'https://www.veraclinic.net/wp-content/uploads/2018/12/HairLossTreatments-ss.jpg',
        imageAlt: "Tratamiento de estimulación capilar.",
        price: 'Consultar',
        brand: 'XL Hair',
      },
    // More products...
  ]
  
  export default function TreatmentListExample() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="treatments" className="text-2xl font-bold tracking-tight text-gray-900">Tratamientos destacados</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  