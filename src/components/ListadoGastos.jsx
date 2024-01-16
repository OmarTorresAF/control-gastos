import React from 'react'
import Gasto  from './Gasto'

export const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.lenght ? 'gastos' : 'No hay gastos aun'}</h2>

        {gastos.map( gasto => (
            <Gasto
            key={gasto.id}
            gasto={gasto}
            />
        ))}
    </div>
  )
}
