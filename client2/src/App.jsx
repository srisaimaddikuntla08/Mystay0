
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { assets } from './assets/assets'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import AllRooom from './pages/AllRooom'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import ListRoom from './pages/hotelOwner/ListRoom'
import AddRoom from './pages/hotelOwner/AddRoom'



function App() {
 const ownerPath = useLocation().pathname.includes('owner')

  return (
    <>
    <div>
    {false && <HotelReg/>}
   {!ownerPath &&  <Navbar/>}
   <div className='min-h-[70vh]'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='rooms' element={<AllRooom/>}/>
      <Route path='/rooms/:id' element={<RoomDetails/>}/>
      <Route path='/mybookings' element={<MyBookings/>}/>
      
      <Route path='/owner' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='add-room'  element={<AddRoom/>}/>
        <Route path='list-room' element={<ListRoom/>}/>
      </Route>
      
    </Routes>
   </div>
   {!ownerPath &&  <Footer/>}
   </div>
     </>
  )
}

export default App
