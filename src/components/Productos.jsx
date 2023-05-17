import React, { useState, useEffect } from 'react'
function Productos() {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const URL = 'https://dummyjson.com/products'
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProductos(data.products))
  }, [])
  return (
    <>
      <div className='flex justify-between'>
        <ul className='flex flex-wrap justify-center'>
          {productos.map((producto) => (
            <li key={producto.id} className='m-4'>
              <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <a href='#'>
                  <img className='p-8 rounded-t-lg max-h-48' src={producto.images[0]} alt='product image' />
                </a>
                <div className='px-5 pb-5'>
                  <a href='#'>
                    <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                      {producto.title}
                    </h5>
                  </a>

                  <div className='flex items-center justify-between'>
                    <span className='text-3xl font-bold text-gray-900 dark:text-white'>{producto.price}</span>
                    <a
                      href='#'
                      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      Añadir
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export { Productos }
