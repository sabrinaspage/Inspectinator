import { createContext, PropsWithChildren, useState } from "react";

export interface Row {
  title: string;
  correctedDuringInspection: boolean;
  repeatViolation: boolean;
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

export const InspectorFormContext = createContext(
  {} as ReturnType<typeof useValue>
);

const useValue = () => {
  const [initialForm, setForm] = useState<InspectorFormContextI>({
    basicInfo: {
      businessName: "",
      operator: "",
      address: "",
      city: "",
      zipCode: "",
      email: "",
      phone: "",
    },
    lowRisk: {
      miniSections: [],
    },
    highRisk: {
      miniSections: [],
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
