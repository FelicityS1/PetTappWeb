import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import ProtectedRoute from "../Components/ProtectedRoute";
import PublicLayout from "../layout/public-layout";
import PetOwnerLayout from "../layout/pet-owner-layout";
import BusinessOwnerLayout from "../layout/business-owner-layout";
import AdminLayout from "../layout/admin-layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        {/* Add more routes for Public here */}
      </Route>

      {/* Pet Owner Routes */}
      <Route
        path="/pet-owner"
        element={
          <ProtectedRoute requiredRoles={["pet-owner"]}>
            <PetOwnerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="profile" element={<div>Pet Profile Page</div>} />
        <Route path="appointments" element={<div>Pet Appointments</div>} />
        <Route
          path="medical-records"
          element={<div>Pet Medical Records</div>}
        />
        {/* Add more routes for Pet Owner here */}
      </Route>

      {/* Business Owner Routes */}
      <Route
        path="/business-owner"
        element={
          <ProtectedRoute requiredRoles={["business-owner"]}>
            <BusinessOwnerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<div>Business Dashboard</div>} />
        <Route path="services" element={<div>Manage Services</div>} />
        <Route path="appointments" element={<div>Business Appointments</div>} />
        <Route path="customers" element={<div>Customer Management</div>} />
        {/* Add more routes for Business Owner here */}
      </Route>

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<div>Admin Dashboard</div>} />
        <Route path="users" element={<div>User Management</div>} />
        <Route path="businesses" element={<div>Business Management</div>} />
        <Route path="reports" element={<div>Reports & Analytics</div>} />
        {/* Add more routes for Admin here */}
      </Route>
    </>
  )
);
