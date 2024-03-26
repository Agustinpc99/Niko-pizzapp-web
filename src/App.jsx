import {BrowserRouter,Routes,Route, useLocation} from "react-router-dom"
import History from './views/History'
import Home from './views/Home'
import LayoutMain from "./components/LayoutMain"
import { useEffect } from "react"
import Pizzas from "./views/Pizzas"

function App() {
  return (
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/pizzas" element={<Pizzas></Pizzas>}></Route>
          <Route path="/history" element={<History></History>}></Route>
        </Routes>
      </LayoutMain>
    </BrowserRouter>
  )
}

export default App
