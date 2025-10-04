import React from 'react'
import { Outlet } from 'react-router-dom'

const BusinessOwnerLayout = () => {
  return (
    <div>
      {/* etong layout ay para sa business owner pages */}
      <Outlet />
    </div>
  );
};

export default BusinessOwnerLayout
