import { create } from 'zustand';

interface User {
  username: string;
  isSignedIn: boolean;
  avatar: string;
}

export const useUserStore = create<User>((set) => ({
  username: '',
  isSignedIn: false,
  avatar: '',
}));
