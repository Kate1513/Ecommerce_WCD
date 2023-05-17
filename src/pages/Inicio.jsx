import React from 'react'
import { Productos } from '../components/Productos'
import { NavbarHeader } from '../components/NavbarH'
function Inicio() {
  return (
    <>
      <section className='max-w-fit justify-center'>
        <NavbarHeader />
        <Productos />
      </section>
    </>
  )
}

export { Inicio }
