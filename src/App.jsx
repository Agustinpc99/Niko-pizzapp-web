import {BrowserRouter,Routes,Route} from "react-router-dom"
import History from './views/History'
import Home from './views/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/history" element={<History></History>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
