import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, register, authMe } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: login,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["authMe"] });
        },
    });
};

export const useRegister = () => {
    return useMutation({
        mutationFn: register,
    });
};

export const useAuthMe = () => {
    return useQuery({
        queryFn: authMe,
        queryKey: ["authMe"]
    });
};