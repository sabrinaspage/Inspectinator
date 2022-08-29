import { createContext, PropsWithChildren, useState } from "react";
import { highRiskQuestions, lowRiskQuestions } from "../constants/constants";

export interface Row {
  title: string;
  pts: number;
}

export interface MiniRiskSection {
  section: string;
  rows: Row[];
}

export interface InspectorFormContextI {
  basicInfo: {
    businessName: string;
    operator: string;
    address: string;
    city: string;
    zipCode: string;
    email: string;
    phone: string;
  };
  lowRisk: {
    miniSections: MiniRiskSection[];
  };
  highRisk: {
    miniSections: MiniRiskSection[];
  };
}

export enum InspectorFormSectionType {
  BASIC_INFO = "basicInfo",
  LOW_RISK = "lowRisk",
  HIGH_RISK = "highRisk",
}

export const InspectorFormContext = createContext(
  {} as ReturnType<typeof useValue>
);

const useValue = () => {
  const [initialForm, setForm] = useState<InspectorFormContextI>({
    [InspectorFormSectionType.BASIC_INFO]: {
      businessName: "",
      operator: "",
      address: "",
      city: "",
      zipCode: "",
      email: "",
      phone: "",
    },
    [InspectorFormSectionType.LOW_RISK]: {
      miniSections: [...lowRiskQuestions],
    },
    [InspectorFormSectionType.HIGH_RISK]: {
      miniSections: [...highRiskQuestions],
    },
  });

  return {
    initialForm,
    setForm,
  };
};

export default function InspectorFormProvider({ children }: PropsWithChildren) {
  return (
    <InspectorFormContext.Provider value={useValue()}>
      {children}
    </InspectorFormContext.Provider>
  );
}
