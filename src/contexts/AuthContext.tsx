
import { createContext, PropsWithChildren, SetStateAction, useState } from "react";


export const AuthContext = createContext(
  {} as ReturnType<typeof useAuth>
);

interface Data {
  correctedDuringInspection: boolean;
  repeatViolation: boolean;
}

interface BasicInfo {
  businessName: string;
  operator: string;
  address: string;
  city: string;
  zipCode: string;
  phoneNumber: string;
}

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [lowRiskAnswers, setLowRiskAnswers] = useState<Data[]>([]);
  const [highRiskAnswers, setHighRiskAnswers] = useState<Data[]>([]);

  const [basicInformation, setBasicInformation] = useState<BasicInfo[]>([]);

  function setUserData(name: string, id: string) {
    setUserName(name);
    setUserId(id)
  }

  return {
    loggedIn,
    setLoggedIn,
    userName,
    userId,
    lowRiskAnswers,
    setLowRiskAnswers,
    highRiskAnswers,
    setHighRiskAnswers,
    setUserData,
    basicInformation,
    setBasicInformation,
  };
};

export default function AuthContextProvider({ children }: PropsWithChildren) {
  return (
    <AuthContext.Provider value={useAuth()}>
      {children}
    </AuthContext.Provider>
  );
}
