import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
        <div >Main</div>
        <Outlet></Outlet>
    </>
  )
}

export default MainLayout