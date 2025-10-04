import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import SignUp from './Components/SignUp/SignUp'
import PONavbar from './Components/PONavbar/PONavbar'
import LogIn from './Components/LogIn/LogIn'
import POHome from './Components/POHome/POHome'
import PetOwner from './Components/Account Creation/PetOwner'
import PetProfile from './Components/Account Creation/PetProfile'
import POMyPets from './Components/PO My Pets/POMyPets'
import AddNewPet from './Components/PO My Pets/addNewPet'

// Public Layout with normal Navbar
const PublicLayout = () => (
  <>
    <Navbar />
    <Outlet /> 
  </>
)

// Pet Owner Layout with PONavbar
const POLayout = () => (
  <>
    <PONavbar />
    <Outlet />
  </>
)

const App = () => {
  return (
    <Router>
      <Routes>
  {/* Public pages */}
  <Route element={<PublicLayout />}>
    <Route path="/" element={<Hero />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/PetOwner" element={<PetOwner />} />
    <Route path="/PetProfile" element={<PetProfile />} />

  </Route>

  {/* Pet Owner pages */}
  <Route element={<POLayout />}>
    <Route path="/PONavbar" element={<div>Pet Owner Dashboard Content</div>} />
    <Route path="/POHome" element={<POHome />} />
    <Route path="/POMyPets" element={<POMyPets />} />
    <Route path="/AddNewPet" element={<AddNewPet />} />
  </Route>

  {/* All routes */}
  <Route path="*" element={<h2>Page not found</h2>} />
</Routes>
      
    </Router>
  )
}

export default App
