import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
  
  const[mensaje, setMensaje] = useState("")
  
  const handlePresupuesto = (e) => {
    e.preventDefault();
    if(!(presupuesto) || presupuesto<0){
      setMensaje("No és un pressupost vàlid")
      return
    }
    setMensaje("")
    setIsValidPresupuesto(true)
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className='campo'>
          <label htmlFor="">Definir Pressupost</label>
          <input 
            className='nuevo-presupuesto'
            type='number'
            placeholder='Afegeix el teu pressupost'
            onChange = { e => setPresupuesto (Number(e.target.value))}

          />
        </div>
        <input type="submit" value="Afegir"/>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto