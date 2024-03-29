import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


const Header = 
({
  gastos,
  setGastos,
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto,
  setIsValidPresupuesto
}) => {
  return (
        <header>
            <h1>Planificador de gastos</h1>
              {isValidPresupuesto ? (
                <ControlPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                gastos={gastos}
                setGastos={setGastos}
                setIsValidPresupuesto={setIsValidPresupuesto}

                />
              ): (
              <NuevoPresupuesto
                      presupuesto={presupuesto}
                      setPresupuesto={setPresupuesto}
                      setIsValidPresupuesto={setIsValidPresupuesto}
                />
                )} 
        </header>
  )
}

export default Header