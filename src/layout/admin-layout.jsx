import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      {/* etong layout ay para sa admin pages */}
      <Outlet />
    </div>
  );
};

export default AdminLayout
