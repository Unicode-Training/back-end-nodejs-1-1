import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import AuthMiddleware from "./middlewares/AuthMiddleware";

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
        </Routes>
      </div>
    </div>
  );
}
