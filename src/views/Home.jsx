import Generador from "../components/Generador"
import LayoutMain from "../components/LayoutMain"
function Home() {

  return (
    <>
      <LayoutMain estado={true}>
        <main className="grow flex flex-col justify-center items-center">
          <Generador></Generador>
        </main>
      </LayoutMain>
    </>
  )
}

export default Home
