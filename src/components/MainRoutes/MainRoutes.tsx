import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import SignUp from "../SignUp/SignUp"

const Login = lazy(() => import("../Login/Login"))
const Home = lazy(() => import("../Home/Home"))
const Products = lazy(() => import("../../pages/Modules/Product/Products"))

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/men" element={<Products />}/>
        <Route  path="/women" element={<Products />}/>
        <Route  path="/login" element={<Login />}/>
          <Route  path="/signup" element={<SignUp />}/>
        </Routes>
    </Suspense>
  )
}

export default MainRoutes
