import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUserStore } from "../stores/user-store";

export default function Google() {
  const [searchParams] = useSearchParams();
  const accessTokenFromGoogle = searchParams.get("accessToken");
  const setUser = useUserStore((state) => state.setUser);
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);
  const setLoading = useUserStore((state) => state.setLoading);
  const navigate = useNavigate();
  useEffect(() => {
    const handleLogin = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/auth/google/callback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ accessToken: accessTokenFromGoogle }),
        }
      );
      if (!response.ok) {
        return alert("Đăng nhập thất bại");
      }
      const { accessToken, refreshToken, user } = await response.json();
      //Lưu token vào localStorage
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      //Lưu user vào store
      setUser(user);
      setAuthenticated(true);
      setLoading(false);

      //Chuyển hướng về trang chủ
      navigate("/");
    };
    handleLogin();
  }, [accessTokenFromGoogle]);
  return null;
}
