import { useEffect, useState } from "react";
import { useUserStore } from "../stores/user-store";
interface FormProfile {
  name: string;
  email: string;
  password?: string;
  confirm_password?: string;
}
export default function Profile() {
  const [form, setForm] = useState<FormProfile>({} as FormProfile);
  const user = useUserStore((state) => state.user);
  const [message, setMessage] = useState("");
  const setUser = useUserStore((state) => state.setUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_API}/auth/profile`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(form),
      }
    );
    const { success, data } = await response.json();
    if (!success) {
      setMessage("Email is exists");
      return;
    }
    setUser(data);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setForm({
      name: user.name,
      email: user.email,
    });
  }, []);
  return (
    <div className="w-[400px] mx-auto">
      <h1 className="text-3xl text-center">Tài khoản</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Tên</label>
          <input
            type="text"
            className="border px-3 py-2 w-full"
            placeholder="Tên..."
            name="name"
            onChange={handleChange}
            value={form.name ?? ""}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="border px-3 py-2 w-full"
            placeholder="Email..."
            name="email"
            onChange={handleChange}
            value={form.email ?? ""}
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
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="border px-3 py-2 w-full"
            placeholder="Nhập lại mật khẩu..."
            name="confirm_password"
            onChange={handleChange}
          />
        </div>
        <button
          className="block w-full bg-amber-900 text-white py-2 cursor-pointer hover:bg-amber-600"
          type="submit"
        >
          Cập nhật
        </button>
        {message && <p className="text-red-600">{message}</p>}
      </form>
    </div>
  );
}
