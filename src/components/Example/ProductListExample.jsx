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
        name: 'Crema antiage',
        href: '#',
        imageSrc: 'https://images.hola.com/imagenes/belleza/actualidad/2016020383507/productos-beauty-mas-vendidos/0-350-193/lierac--a.jpg',
        imageAlt: "Crema anti edad Lierac.",
        price: '$7200',
        brand: 'Lierac',
      },
      {
        id: 2,
        name: 'Corrector de líneas',
        href: '#',
        imageSrc: 'https://images.hola.com/imagenes/belleza/actualidad/2016020383507/productos-beauty-mas-vendidos/0-350-150/germaine--a.jpg',
        imageAlt: "Corrector de líneas Germaine de Capuccini.",
        price: '$4900',
        brand: 'Germaine de Capuccini',
      },
      {
        id: 3,
        name: 'Crema anti-edad',
        href: '#',
        imageSrc: 'https://images.hola.com/imagenes/belleza/actualidad/2016020383507/productos-beauty-mas-vendidos/0-350-222/olay--a.jpg',
        imageAlt: "Crema anti edad Olay.",
        price: '$3500',
        brand: 'Olay',
      },
      {
        id: 4,
        name: 'Crema Facial',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/51mrt7ZBWbL._SY355_.jpg',
        imageAlt: "Crema facial Chronos.",
        price: '$5200',
        brand: 'Chronos',
      },
      
    // More products...
  ]
  
  export default function ProductListExample() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products" className="text-2xl font-bold tracking-tight text-gray-900">Productos destacados</h2>
  
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
  