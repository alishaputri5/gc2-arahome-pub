import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Rootlayout() {
  return(
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
