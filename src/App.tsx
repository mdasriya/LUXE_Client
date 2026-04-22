import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainRoutes from './components/MainRoutes/MainRoutes'
import Footer from './components/Footer/Footer'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <MainRoutes />
      {!isLoginPage && <Footer />}
    </>
  )
}

export default App
