import { createContext } from "react";

interface User {
  nickname: string;
  name: string;
  image: string;
}

export const UserContext = createContext<User | null>(null);
