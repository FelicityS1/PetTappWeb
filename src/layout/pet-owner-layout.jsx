import React from 'react'
import { Outlet } from 'react-router-dom'

const PetOwnerLayout = () => {
  return (
    <div>
      {/* etong layout ay para sa pet owner pages */}
      <Outlet />
    </div>
  )
}

export default PetOwnerLayout
