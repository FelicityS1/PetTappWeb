import React from 'react'
import { useLogin } from '../query/useAuth'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { mutate: login, isPending } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData, {
      onSuccess: (data) => {
        console.log('Login successful:', location);
        const from = location.state?.from?.pathname || getDefaultRoute(data.user.role);
        navigate(from, { replace: true });
      },
      onError: (error) => {
        console.error('Login failed:', error);
      }
    });
  };

  const getDefaultRoute = (role) => {
    switch (role) {
      case 'pet-owner':
        return '/pet-owner/profile';
      case 'business-owner':
        return '/business-owner/dashboard';
      case 'admin':
        return '/admin/dashboard';
      default:
        return '/';
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit" disabled={isPending}>{isPending ? "Logging in..." : "Login"}</button>
      </form>

      <div>
        <h1>{formData.email}</h1>
        <h1>{formData.password}</h1>
      </div>
    </div>
  )
}

export default LoginPage
