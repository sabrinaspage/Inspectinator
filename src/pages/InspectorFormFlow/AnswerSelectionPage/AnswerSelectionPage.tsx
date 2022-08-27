import { useContext, useEffect } from "react";
import {
  highRiskQuestions,
  lowRiskQuestions,
  UrlsForForm,
} from "../../../constants/constants";
import { InspectorFormContext } from "../../../contexts/InspectorFormContext";

export default function AnswerSelectionPage() {
  const { initialForm, setForm } = useContext(InspectorFormContext);
  console.log(initialForm);

  const getUrlPath = () => {
    if (window.location.pathname === UrlsForForm.lowRiskSection)
      return "LOW_RISK";
    if (window.location.pathname === UrlsForForm.highRiskSection)
      return "HIGH_RISK";
  };

  useEffect(() => {
    const path = getUrlPath();
    switch (path) {
      case "LOW_RISK":
        return setForm({
          ...initialForm,
          lowRisk: {
            miniSections: [...lowRiskQuestions],
          },
        });
      case "HIGH_RISK":
        return setForm({
          ...initialForm,
          highRisk: {
            miniSections: [...highRiskQuestions],
          },
        });
    }

    console.log(initialForm);
  }, []);

  return <header className="App-header">stuff</header>;
}
