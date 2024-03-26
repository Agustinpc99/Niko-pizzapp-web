import Header from './Header'
import Footer from './Footer'


function LayoutMain(props) {
  return (
    <div className='flex flex-col justify-center min-h-screen bg-gradient-to-tr from-amber-300 to-red-600 gap-5 gap-y-0'>
        <Header></Header>
        {props.children}
        <Footer></Footer>
    </div>
  )
}

export default LayoutMain