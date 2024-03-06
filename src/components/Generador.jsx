import React,{useState} from 'react'
import {sabores} from "../data/sabores"

function Generador() {
    const [pizza, setPizza] = useState(Array(4).fill(''))

    function generarSabor(){
        let rareza = Math.round(Math.random()*100)
        let seleccionSabor
        if(rareza <= 60){
            seleccionSabor = Math.round(Math.random()*5)
            return sabores.comun[seleccionSabor]
        } else if(rareza <= 99){
            seleccionSabor = Math.round(Math.random()*41)
            return sabores.raro[seleccionSabor]
        } else {
            seleccionSabor = Math.round(Math.random()*6)
            return sabores.legendario[seleccionSabor]
        }
    }
    
    function crearPizza(){
        let pizzaNueva = []
        while(pizzaNueva.length < 4){
            let sabor = generarSabor()
            if(!pizzaNueva.includes(sabor)){
                pizzaNueva.push(sabor)
            }
        }
        setPizza(pizzaNueva)
    }

    
    if(!pizza.includes("")){
        let historialPizzas = JSON.parse(localStorage.getItem('historialPizzas')) || []
        historialPizzas.push(pizza)
        localStorage.setItem('historialPizzas', JSON.stringify(historialPizzas))
    }
    


  return (
    <>
    <div className="h-[40vh] w-[90%] flex flex-col justify-center items-center bg-yellow-400 rounded-t text-xl gap-4 font-semibold md:h-[60vh] md:text-3xl lg:w-[80vw] xl:w-[60vw]">
            <p>{pizza[0]}</p>
            <p>{pizza[1]}</p>
            <p>{pizza[2]}</p>
            <p>{pizza[3]}</p>
          </div>
          <div className="w-[90%] flex flex-col justify-center items-center">
            <button onClick={crearPizza} className="bg-amber-400 w-full text-xl font-semibold rounded-b p-1 md:text-3xl lg:w-[80vw] xl:w-[60vw]">Generar Pizza</button>
          </div>
    </>
  )
}

export default Generador