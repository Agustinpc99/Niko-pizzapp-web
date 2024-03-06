import {RouterProvider,createBrowserRouter} from "react-router-dom"
import History from './views/History'
import Home from './views/Home'

const router = createBrowserRouter([
  {path:"/", element: <Home></Home>},
  {path:"/history", element: <History></History>},
])


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
