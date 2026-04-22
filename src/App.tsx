import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainRoutes from './components/MainRoutes/MainRoutes'
import Footer from './components/Footer/Footer'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <MainRoutes />
      {!isAuthPage && <Footer />}
    </>
  )
}

export default App
