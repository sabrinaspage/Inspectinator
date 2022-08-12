import { createContext, PropsWithChildren, useState } from "react";

interface InspectorFormContextI {
  hi: string;
}

export const InspectorFormContext = createContext(
  {} as ReturnType<typeof useValue>
);

const useValue = () => {
  const [initialForm, setForm] = useState<InspectorFormContextI>({ hi: "sup" });

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
