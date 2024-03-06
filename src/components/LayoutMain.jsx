import React from 'react'
import Header from './Header'
import Footer from './Footer'

function LayoutMain(props) {
  return (
    <div className='flex flex-col justify-center min-h-screen bg-amber-300 gap-5'>
        <Header estado={props.estado}></Header>
        {props.children}
        <Footer></Footer>
    </div>
  )
}

export default LayoutMain