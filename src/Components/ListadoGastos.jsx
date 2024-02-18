import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
        
       
       {filtro ? (
          <>
              <h2>{gastosFiltrados.length ? "Despeses":"No hi ha despeses en aquesta categoría"}</h2>
              {gastosFiltrados.map(gasto =>(
                <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
             ))}
          </>
         ) : ( 
          <>
              <h2>{gastos.length ? "Despeses":"No hi ha despeses encara"}</h2>
               {gastos.map(gasto =>(

                <Gasto 
                 key={gasto.id}
                 gasto={gasto}
                 setGastoEditar={setGastoEditar}
                 eliminarGasto={eliminarGasto}
               />
              ))}
          
          </>

      )
       }
    </div>
  )
}

export default ListadoGastos