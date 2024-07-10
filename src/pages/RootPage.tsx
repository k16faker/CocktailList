import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

const RootPage= () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default RootPage