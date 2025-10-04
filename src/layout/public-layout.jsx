import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      {/* etong layout ay para sa public pages */}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
