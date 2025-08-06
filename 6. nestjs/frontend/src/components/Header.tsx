// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User, useUserStore } from "../stores/user-store";
import { useEffect } from "react";
// interface User {
//   id: number;
//   name: string;
// }
export default function Header() {
  const user = useUserStore((state) => state.user);
  const isLoading = useUserStore((state) => state.isLoading);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const setUser = useUserStore((state) => state.setUser);
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);
  const setLoading = useUserStore((state) => state.setLoading);
  const getUserFromServer = useUserStore((state) => state.getUserFromServer);
  const handleLogout = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken || !confirm("Bạn có chắc?")) return;
    await fetch(`${import.meta.env.VITE_SERVER_API}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser({} as User);
    setAuthenticated(false);
    setLoading(false);
  };
  useEffect(() => {
    getUserFromServer();
  }, []);
  return (
    <header className="flex gap-3 py-3 border-b-1 border-[#ddd]">
      <h1 className="text-3xl font-medium">Unicode</h1>
      <ul className="flex gap-3 ml-auto">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoading ? (
          <>Loading...</>
        ) : isAuthenticated ? (
          <>
            <li>
              <Link to="/profile">Chào bạn: {user?.name}</Link>
            </li>
            <li className="cursor-pointer text-red-700" onClick={handleLogout}>
              Đăng xuất
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link to="/register">Đăng ký</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
