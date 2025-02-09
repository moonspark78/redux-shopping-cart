import { Outlet } from 'react-router';
import './App.css'
import Navbar from './components/Navbar';

function App() {


  return (
    <div className='bg-white'>
      <Navbar/>
      <main className='max-w-7xl text-black mx-auto min-h-screen mt-12'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
