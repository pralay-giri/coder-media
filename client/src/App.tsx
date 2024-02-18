import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='h-full'>
        <Outlet />
      </main>
    </>
  )
}

export default App
