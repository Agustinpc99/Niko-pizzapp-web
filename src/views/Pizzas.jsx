import React,{ useEffect, useState } from 'react'
import { cards } from '../data/saboresCards'
import { ClipLoader } from "react-spinners"


function Pizzas() {

  const [pizzas, setPizzas] = useState([])

  useEffect(()=>{
    // Reemplazamos corsproxy por la ruta relativa de la función de Netlify
    const url = "/.netlify/functions/get-pizzas";

    fetch(url)
      .then((e) => {
        if (!e.ok) throw new Error("Error en la respuesta del servidor");
        return e.text();
      })
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        
        // Toda tu lógica original de scraping se mantiene intacta
        const datos = [...doc.querySelectorAll("#category-138951 .store-menu-item")].map(card => ({
          nombre: card.querySelector(".name")?.textContent.trim().toLowerCase(),
          precio: card.querySelector(".price-value")?.textContent.trim()
        }));

        setPizzas(datos);
      })
      .catch((error) => console.error("Error cargando pizzas:", error));
  }, []);

cards.forEach((pizza)=>{
  for (const pi of pizzas) {
    if(pi.nombre == pizza.nombre.toLocaleLowerCase()){
      pizza.precio = pi.precio
    }
    
  }
})

  let tarjetas = cards.map((tarjeta) => <div key={tarjeta.nombre} className="p-6 min-h-[350px] w-[300px] flex flex-col justify-between items-center bg-amber-500 rounded-xl text-xl gap-4 font-semibold md:min-h-[400px] md:w-[400px] md:text-2xl border border-black text-center">
    <img className='h-1/2' src={tarjeta.imagen || "/pronto.png"} alt="" />
    <h2>{tarjeta.nombre}</h2>
    <p className='ps-2 text-lg'>{tarjeta.descripcion}</p>
    <span className={tarjeta.rareza == "comun" && "text-green-700" || tarjeta.rareza == "raro" && "text-blue-800" || tarjeta.rareza == "legendario" && "text-red-800" }>{tarjeta.rareza}</span>
    <span> {tarjeta.precio} </span>
  </div>)

  let loading = <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#0a0a0aff" width={200} size={180} />
    </div>

  let control = false
  if("precio" in cards[0]){
    control = true
  }
  return (
    <div className='grow flex flex-wrap gap-5 py-5 justify-center'>{control ? tarjetas : loading }</div>
  )
}

export default Pizzas