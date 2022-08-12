import { createContext, PropsWithChildren, useState } from "react";

const InspectorFormContext = createContext({});

export default function InspectorFormProvider({ children }: PropsWithChildren) {
  const [initialForm, setForm] = useState({});

  return (
    <InspectorFormContext.Provider value={initialForm}>
      {children}
    </InspectorFormContext.Provider>
  );
}
