import { url } from "inspector";
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

  useEffect(() => {
    if (window.location.pathname === UrlsForForm.lowRiskSection) {
      setForm({
        ...initialForm,
        lowRisk: {
          miniSections: [...lowRiskQuestions],
        },
      });
    }

    if (window.location.pathname === UrlsForForm.highRiskSection) {
      setForm({
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
