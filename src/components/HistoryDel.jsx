import React, { useState } from 'react'

function HistoryDel() {

  const [password,setPassword] = useState("")

  function confirmPass(e){
    e.preventDefault()
    if(password == "Jaja1515.."){
      localStorage.removeItem("historialPizzas")
    }else{
      alert("Contraseña erronea")
    }

  }

  function inputRescue(e){
    
    setPassword(e.target.value)

  }

  return (
    <div className='w-4/5 h-1/5 bg-blue-700 absolute top-36 flex flex-col justify-center items-center gap-5'>
        <p className='text-white font-bold text-xl'>Contraseña</p>
        <form className='flex flex-col gap-5' onSubmit={confirmPass} onInput={inputRescue} action="">
          <input  type="password" />
          <button  className='p-2 rounded-md bg-red-800 text-white font-semibold'>Enviar</button>
        </form>
    </div>
  )
}

export default HistoryDel