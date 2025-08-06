import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../stores/user-store";

export default function AuthMiddleware() {
  const isAuthenticated = useUserStore((state) => {
    return state.isAuthenticated;
  });
  const isLoading = useUserStore((state) => {
    return state.isLoading;
  });
  if (isLoading) {
    return;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}
