import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface User {
  id: number;
  name: string;
}
export default function Header() {
  const [user, setUser] = useState<User | null>(null);
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
    setUser(null);
  };
  useEffect(() => {
    const getUser = async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) return;

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.ok) {
        const user = await response.json();
        setUser(user);
      }
    };
    getUser();
  }, []);
  return (
    <header className="flex gap-3 py-3 border-b-1 border-[#ddd]">
      <h1 className="text-3xl font-medium">Unicode</h1>
      <ul className="flex gap-3 ml-auto">
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <>
            <li>Chào bạn: {user?.name}</li>
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
