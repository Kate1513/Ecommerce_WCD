import React from 'react'
import { Productos } from '../components/Productos'
import { NavbarHeader } from '../components/NavbarH'
import Buscador from '../components/Buscador'
function Inicio() {
  return (
    <>
      <section className='justify-center '>
        <NavbarHeader />
        <Buscador />
        <Productos />
      </section>
    </>
  )
}

export { Inicio }
