import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const Home = lazy(() => import("../Home/Home"))
const Products = lazy(() => import("../../pages/Modules/Product/Products"))

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/men" element={<Products />}/>
        <Route  path="/women" element={<Products />}/>
      </Routes>
    </Suspense>
  )
}

export default MainRoutes
