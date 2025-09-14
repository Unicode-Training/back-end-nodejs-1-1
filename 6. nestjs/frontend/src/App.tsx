import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import Google from "./pages/Google";
import Roles from "./pages/Admin/Roles/Roles";
import EditRole from "./pages/Admin/Roles/EditRole";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="w-[1200px] mx-auto">
      <Header />
      <div className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AuthMiddleware />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/auth/google/callback" element={<Google />} />
          <Route path="/admin" element={<AuthMiddleware />}>
            <Route path="roles" element={<Roles />} />
            <Route path="roles/:id" element={<EditRole />} />
          </Route>
        </Routes>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
