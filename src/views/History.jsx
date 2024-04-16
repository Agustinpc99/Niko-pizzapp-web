import React, { useState } from 'react'
import {sabores} from "../data/sabores"
import HistoryDel from '../components/HistoryDel'

function History() {
    let HistorialPizzas = JSON.parse(localStorage.getItem("historialPizzas")) || []
    let pizzas = HistorialPizzas
    const [mostrarBorrar,setMostrarBorrar] = useState(<></>)

    function borrarHistorial(){
      setMostrarBorrar(<HistoryDel></HistoryDel>)

    }
    

  return (
    <>
        <main className="grow flex flex-col justify-center items-center gap-4">
            <div className='flex justify-center relative w-full'><p className='text-xl font-semibold pt-2'>Total: {pizzas.length}</p>
            <img onClick={borrarHistorial} className='w-10 bg-black rounded-xl absolute end-3 top-1' src="/eliminar.png" alt="boton basurero" /></div>
            {mostrarBorrar}
            <div className='grow flex flex-wrap gap-10 justify-center'>
                {pizzas.length > 0 && pizzas.map((cards) => <div key={Math.random()} className="h-[300px] w-[300px] flex flex-col justify-center items-center bg-amber-500 rounded-xl text-xl gap-4 font-semibold md:h-[350px] md:w-[400px] md:text-3xl border border-black">
                {cards.length > 0 && cards.map((pizza) => {
                  if(sabores.comun.includes(pizza)){ 
                    return <p className='text-green-700' key={Math.random()}>{pizza}</p> 
                  } else if (sabores.raro.includes(pizza)){
                    return <p className='text-blue-800' key={Math.random()}>{pizza}</p>
                  } else {
                    return <p className='text-red-800' key={Math.random()}>{pizza}</p>
                  }
                  })}
                </div> )}
          </div>
        </main>
    </>
  )
}

export default History
//