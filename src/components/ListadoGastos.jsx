import React from 'react'

export const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.lenght ? 'gastos' : 'No hay gastos aun'}</h2>
    </div>
  )
}
