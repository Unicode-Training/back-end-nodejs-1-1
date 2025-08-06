import { create } from "zustand";
export interface User {
  id: number;
  name: string;
  email: string;
}
interface UserState {
  user: User;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  setLoading: (status: boolean) => void;
  setAuthenticated: (status: boolean) => void;
  getUserFromServer: () => Promise<void>;
}
export const useUserStore = create<UserState>((set) => ({
  user: {} as User,
  isLoading: true,
  isAuthenticated: false,
  setUser: (user: User) => set({ user }),
  setLoading: (status: boolean) => set({ isLoading: status }),
  setAuthenticated: (status: boolean) => set({ isAuthenticated: status }),
  getUserFromServer: async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        return;
      }
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      const user = await response.json();
      set({ user, isAuthenticated: true });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
