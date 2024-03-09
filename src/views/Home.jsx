import Generador from "../components/Generador"
import LayoutMain from "../components/LayoutMain"
function Home() {

  return (
    <>
      <LayoutMain estado={true}>
        <main className="grow flex flex-col justify-center items-center">
          <Generador></Generador>
          <p className="py-5"><span className="text-green-700 font-bold md:text-xl">Comun: 70% </span><span className="text-blue-800 font-bold md:text-xl"> Raro: 29% </span><span className="text-red-800 font-bold md:text-xl"> Legendario: 1%</span></p>
        </main>
      </LayoutMain>
    </>
  )
}

export default Home
