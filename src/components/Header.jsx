import React, { useState } from 'react'
import {Link as Anchor, useLocation} from "react-router-dom"
import 'animate.css'

function Header() {
  const [menuHamburguesa, setMenuHamburguesa] = useState(<div></div>)
  const rutas = [
    {path : "/", titulo : "Inicio", activo : "/" == useLocation().pathname},
    {path : "/pizzas", titulo : "Pizzas", activo : "/pizzas" == useLocation().pathname},
    {path : "/history", titulo : "Historial", activo : "/history" == useLocation().pathname}
  ]
  function abrirMenu(){
    let navbar = rutas.map((ruta) => {
      return <Anchor onClick={cerrarMenu} className={`border p-1 text-lg rounded border-yellow-500 ${ruta.activo ? "bg-yellow-300" : "bg-yellow-400"}`} key={ruta.titulo} to={ruta.path}>{ruta.titulo}</Anchor>
    })
    menuHamburguesa.props.className == "animate__animated animate__backInDown flex flex-col bg-gradient-to-r from-amber-500 to-red-700 w-[200px] h-[150px] self-end justify-evenly absolute top-16" ? setMenuHamburguesa(<nav className='animate__animated animate__backOutUp flex flex-col bg-gradient-to-r from-amber-500 to-red-700 w-[200px] h-[150px] self-end justify-evenly absolute top-16'>{navbar}</nav>) : setMenuHamburguesa(<nav className='animate__animated animate__backInDown flex flex-col bg-gradient-to-r from-amber-500 to-red-700 w-[200px] h-[150px] self-end justify-evenly absolute top-16'>{navbar}</nav>)
  }

  function cerrarMenu(){
    setMenuHamburguesa(<div></div>)
  }


  return (
    <>
    <header className="flex px-2 bg-gradient-to-r from-red-700 to-amber-500 py-3 items-center">
          <Anchor to="/" className='flex gap-2'>
          <img className='h-10 pe-2' src="/logopizza.png" alt="" />
          <h1 className="grow text-xl font-semibold">Niko Pizzapp</h1></Anchor>
          <div className='grow'></div>
          <button onClick={abrirMenu}><img className='w-10' src="/menu.png" alt="" /></button>
    </header>
          {menuHamburguesa}
    </>
  )
}

export default Header