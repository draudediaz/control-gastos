import CerrarBtn from "../img/cerrar.svg"
import { useState, useEffect } from "react"
import Mensaje from "./Mensaje"

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {

   const [mensaje, setMensaje] = useState("")
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [categoria, setCategoria] = useState("")
    const [fecha, setFecha] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
      }
    }, [])
    

   const ocultarModal = () => {
     setAnimarModal(false)
    setGastoEditar({})
     setTimeout(()=>{
        setModal(false)
      }, 500)
   }
    
   const handleSubmit = e =>{
        e.preventDefault();
        if([nombre, cantidad, categoria].includes("")){
            setMensaje("Tots els camps son obligatoris")

            setTimeout(()=>{
                setMensaje("")
            },3000);
            return;
        }
        guardarGasto({nombre, cantidad, categoria, id, fecha})
   }
   
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="tancar modal" onClick={ocultarModal} />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar":"cerrar"}`} action="">
            <legend>{gastoEditar.nombre ? "Editar Despesa":"Nova Despesa"}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor="nomwbre">Despesa</label>
                <input
                id="nombre"
                type="text"
                placeholder="Afegeix el nom de la despesa"
                value={nombre}
                onChange={ e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="Quantitat">Quantitat</label>
                <input
                id="cantidad"
                type="number"
                placeholder="Afegeix la quantitat de la despesa: Ex. 300"
                value={cantidad}
                onChange = { e => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoría</label>
                <select 
                id="categoria" 
                value={categoria}
                onChange={ e => setCategoria(e.target.value)}>
                    <option value="">-- Escull una categoría --</option>
                    <option value="Estalvis">Estalvis</option>
                    <option value="Comida">Menjar</option>
                    <option value="Casa">Casa</option>
                    <option value="Gastos">Despeses vàries</option>
                    <option value="Ocio">Ocio</option>
                    <option value="Salud">Salut</option>
                    <option value="Suscripcions">Suscripcions</option>
                </select>
            </div>
            <input type="submit" value={gastoEditar.nombre ? "Editar Despesa":"Afegir Despesa"} />
        </form>
    </div>
  )
}

export default Modal