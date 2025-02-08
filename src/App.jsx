import { Outlet } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <Navbar/>
      <main className='max-w-7xl mx-auto min-h-screen mt-12'>
        <Outlet/>
      </main>
    </>
  )
}

export default App
