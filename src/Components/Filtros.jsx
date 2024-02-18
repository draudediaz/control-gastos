import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar despeses</label>
                <select value={filtro} onChange={e => setFiltro(e.target.value)}>
                    <option value="">-- Totes les categories --</option>
                    <option value="Estalvis">Estalvis</option>
                    <option value="Comida">Menjar</option>
                    <option value="Casa">Casa</option>
                    <option value="Gastos">Despeses vàries</option>
                    <option value="Ocio">Ocio</option>
                    <option value="Salud">Salut</option>
                    <option value="Suscripcions">Suscripcions</option>
                </select>
            </div>

        </form>
    </div>
  )
}

export default Filtros