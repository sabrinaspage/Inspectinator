
import { createContext, PropsWithChildren, SetStateAction, useState } from "react";

export const AuthContext = createContext(
  {} as ReturnType<typeof useAuth>
);

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  function setUserData(name: string, id: string) {
    setUserName(name);
    setUserId(id)
  }

  return {
    loggedIn,
    setLoggedIn,
    userName,
    userId,
    setUserData
  };
};

export default function AuthContextProvider({ children }: PropsWithChildren) {
  return (
    <AuthContext.Provider value={useAuth()}>
      {children}
    </AuthContext.Provider>
  );
}
