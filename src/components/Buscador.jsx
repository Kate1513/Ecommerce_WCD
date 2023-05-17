import { React, useState, useEffect } from 'react'

function Buscador() {
  const [search, setSearch] = useState('')
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const URL = 'https://dummyjson.com/products'
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProductos(data.products))
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    filtrar(e.target.value)
  }

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = productos.filter((elemento) =>
      elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    )
    setProductos(resultadosBusqueda)
  }

  return (
    <div className='containerSearch m-6 md:ml-36'>
      <input
        type='search'
        value={search}
        className='rounded-xl'
        placeholder='Encuentra lo que quieres'
        onChange={handleSearch}
      />
      <i className='fi fi-rr-search'></i>
    </div>
  )
}

export default Buscador
