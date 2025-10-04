import { api } from "./config";

export const login = async ({ email, password }) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

export const register = async (email, password, firstName, lastName, role) => {
  const response = await api.post("/auth/register", {
    email,
    password,
    firstName,
    lastName,
    role,
  });
  return response.data;
};

export const refreshToken = async () => {
  const response = await api.post("/auth/refresh");
  return response.data;
};

export const authMe = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};
