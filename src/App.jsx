import { Outlet } from "react-router-dom"
import NavSidebar from "./components/Navigation/NavSidebar"

function App() {
 
  return (
    <div className="flex">
      <NavSidebar />
      <Outlet/> 
    </div>
  )
}

export default App
