import { useContext, useEffect, useState } from "react";
import {
  highRiskQuestions,
  lowRiskQuestions,
  UrlsForForm,
} from "../../../constants/constants";
import { InspectorFormContext } from "../../../contexts/InspectorFormContext";
import { BasicInfoSection } from "./BasicInfoSection";
import { RiskSection } from "./RiskSection";

const getUrlPath = () => {
  if (window.location.pathname === UrlsForForm.basicInfoSection) {
    return "BASIC_INFO";
  }
  if (window.location.pathname === UrlsForForm.lowRiskSection) {
    require("./blueAccordion.css");
    return "LOW_RISK";
  }
  if (window.location.pathname === UrlsForForm.highRiskSection) {
    require("./redAccordion.css");
    return "HIGH_RISK";
  }
  return "";
};

export default function AnswerSelectionPage() {
  const [path, setPath] = useState("");

  useEffect(() => {
    const riskSectionPath = getUrlPath();
    setPath(riskSectionPath);
  }, [path]);

  switch (path) {
    case "BASIC_INFO":
      return <BasicInfoSection />;
    case "LOW_RISK":
      return <RiskSection type="LOW_RISK" />;
    case "HIGH_RISK":
      return <RiskSection type="HIGH_RISK" />;
  }

  return null;
}
