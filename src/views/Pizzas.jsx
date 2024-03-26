import React from 'react'
import { cards } from '../data/saboresCards'

function Pizzas() {
  let tarjetas = cards.map((tarjeta) => <div key={tarjeta.nombre} className="h-[300px] w-[300px] flex flex-col justify-center items-center bg-amber-500 rounded-xl text-xl gap-4 font-semibold md:h-[350px] md:w-[400px] md:text-3xl border border-black">
    <img className='h-1/2' src="/pronto.png" alt="" />
    <h2>{tarjeta.nombre}</h2>
    <p>{tarjeta.descripcion}</p>
    <span className={tarjeta.rareza == "comun" && "text-green-700" || tarjeta.rareza == "raro" && "text-blue-800" || tarjeta.rareza == "legendario" && "text-red-800" }>{tarjeta.rareza}</span>
  </div>)
  return (
    <div className='grow flex flex-wrap gap-5 py-5 justify-center'>{tarjetas}</div>
  )
}

export default Pizzas