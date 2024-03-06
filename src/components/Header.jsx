import React from 'react'
import {Link as Anchor} from "react-router-dom"

function Header(props) {
  function botonNav(){
    if(props.estado){
      return ["border border-yellow-500 p-1 text-lg rounded bg-yellow-300","border border-yellow-500 p-1 text-lg rounded bg-yellow-400"]
    } else {
      return ["border border-yellow-500 p-1 text-lg rounded bg-yellow-400","border border-yellow-500 p-1 text-lg rounded bg-yellow-300"]
    }
  }
  let botonesNav = botonNav()
  return (
    <>
    <header className="flex px-2 bg-amber-500 py-3 items-center">
          <h1 className="grow text-xl font-semibold">Niko Pizzapp</h1>
          <nav className="flex gap-2">
            <Anchor className={botonesNav[0]} to="/">Inicio</Anchor>
            <Anchor className={botonesNav[1]} to="/history">Historial</Anchor>
          </nav>
    </header>
    </>
  )
}

export default Header