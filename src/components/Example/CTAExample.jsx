/* This example requires Tailwind CSS v2.0+ */
export default function CTAExample() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
          <span className="block">Tu camino en la belleza comienza hoy.</span>
          <span className="block text-indigo-600">Consultanos para el mejor asesoramiento.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 mr-16 w-fit justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contactanos
            </a>
          </div>
          {/* <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Consultar
              </a>
            </div> */}
        </div>
      </div>
    </div>
  )
}
