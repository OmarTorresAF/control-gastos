import React from 'react'
import CerrarBtn from '../img/cerrar.svg'
import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'

const Modal = ({setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar
}) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre ] =useState('')
    const [cantidad, setCantidad ] =useState('')
    const [categoria, setCategoria ] =useState('')

    useEffect(()=>{
      if(Object.keys(gastoEditar).length > 0){
        setNombre(gastoEditar.nombre)
        setCantidad(gastoEditar.cantidad)
        setCategoria(gastoEditar.categoria)
      }
    }, [])

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
          setModal(false)
        }, 500);
    }

    const handleSubmit = e => {
      e.preventDefault()

      if([nombre, cantidad, categoria].includes('')) {
        setMensaje('Todos los campos son obligatorios')

        setTimeout(() => {
          setMensaje('')
        }, 3000);
        return
      }
      guardarGasto({nombre, cantidad, categoria})
    }


  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
            src={CerrarBtn} 
            alt="cerrar modal"
            onClick={ocultarModal}
            />    
        </div>
        <form
          onSubmit={handleSubmit}
          className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
          <div className='campo'>
            <label htmlFor="nombre">Nombre Gasto</label>
            <input 
            type="text"
            id='nombre'
            placeholder='Añade el gasto del gasto ej. 300' 
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className='campo'>
            <label htmlFor="nombre">Cantidad</label>
            <input 
            type="text"
            id='nombre'
            placeholder='Añade la cantidad del gasto ej. 300'
            value={cantidad} 
            onChange={e => setCantidad(Number(e.target.value))}/>
          </div>
          <div className='campo'>
            <label htmlFor="nombre">Categoria</label>
            <select 
            id="categoria"
            value={categoria} 
            onChange={e => setCategoria(e.target.value)}
            >
              <option value="">Seleccione</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="subscripciones">Subscripciones</option>
            </select>
          </div>
          <input type="submit" 
          value= 'añadir gasto'/>
        </form>
    </div>
  )
}

export default Modal