import React from 'react'
import LayoutMain from '../components/LayoutMain'

function History() {
    let HistorialPizzas = JSON.parse(localStorage.getItem("historialPizzas")) || []
    let pizzas = HistorialPizzas

  return (
    <>
    <LayoutMain estado={false}>
        <main className="grow flex flex-col justify-center items-center gap-4">
            <p className='text-xl font-semibold'>Total: {pizzas.length}</p>
            <div className='grow flex flex-wrap gap-4 justify-center'>
                {pizzas.length > 0 && pizzas.map((cards) => <div key={Math.random()} className="h-[300px] w-[300px] flex flex-col justify-center items-center bg-yellow-400 rounded-xl text-xl gap-4 font-semibold md:h-[350px] md:w-[350px] md:text-3xl border border-black">
                {cards.length > 0 && cards.map((pizza) => <p key={Math.random()}>{pizza}</p>)}
                </div> )}
          </div>
        </main>
    </LayoutMain>
    </>
  )
}

export default History