import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/user-store";
interface FormInterface {
  email: string;
  password: string;
}
export default function Login() {
  const [form, setForm] = useState<FormInterface>({} as FormInterface);
  const [msg, setMsg] = useState<string>("");
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setAuthenticated = useUserStore((state) => state.setAuthenticated);
  const setLoading = useUserStore((state) => state.setLoading);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_API}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    if (response.status === 401) {
      setMsg("Invalid credentials");
      return;
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
  return (
    <div className="w-[400px] mx-auto">
      <h1 className="text-3xl text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="border px-3 py-2 w-full"
            placeholder="Email..."
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="border px-3 py-2 w-full"
            placeholder="Password..."
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="block w-full bg-amber-900 text-white py-2 cursor-pointer hover:bg-amber-600"
          type="submit"
        >
          Login
        </button>
        {msg && <p className="text-red-500">{msg}</p>}
      </form>
    </div>
  );
}
