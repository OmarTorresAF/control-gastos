import React from 'react'
import CerrarBtn from '../img/cerrar.svg'



const Modal = ({setModal,animarModal,setAnimarModal}) => {

    const ocultarModal = () => {
        setModal(false)
        setAnimarModal(false)

        setTimeout(() => {
          setModal(false)
        }, 500);
    }


  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={CerrarBtn} 
            alt="cerrar modal"
            onClick={ocultarModal}
            />
            
        </div>
        <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
          <legend>Nuevo Gasto</legend>
          <div className='campo'>
            <label htmlFor="nombre">Nombre del Gasto</label>
            <input 
            type="text"
            id='nombre'
            placeholder='Añade el gasto del gasto ej. 300' />

          </div>
          <div className='campo'>
            <label htmlFor="nombre">Cantidad</label>
            <input 
            type="text"
            id='nombre'
            placeholder='Añade la cantidad del gasto ej. 300' />

          </div>
          <div className='campo'>
            <label htmlFor="nombre">Categoria</label>
            <select 
            id="categoria">
              <option value="">Seleccione</option>
              <option value="ahorro">Ahorro</option>
              <option value="ahorro">Comida</option>
              <option value="ahorro">Casa</option>
              <option value="ahorro">Gastos Varios</option>
              <option value="ahorro">Ocio</option>
              <option value="ahorro">Salud</option>
              <option value="ahorro">Subscripciones</option>

            </select>

          </div>
          <input type="submit" 
          value= 'añadir gasto'/>
        </form>
    </div>
  )
}

export default Modal