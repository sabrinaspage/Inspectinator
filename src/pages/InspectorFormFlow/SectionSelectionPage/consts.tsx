import { ReactNode } from "react";
import { UrlsForForm } from "../../../constants/constants";

export enum SectionStatus {
  NOT_STARTED,
  SAVED,
}

export interface InspectorFormSection {
  id: string;
  headingId: string;
  collapseId: string;
  status: SectionStatus;
  title: string;
  description: ReactNode;
  url: string;
}

// if we need to call the api for certain values
// we can from here?

function inspectorFormSectionsFunc(): InspectorFormSection[] {
  return [
    {
      id: "",
      headingId: "flush-headingOne",
      collapseId: "flush-collapseOne",
      status: SectionStatus.NOT_STARTED,
      title: "Basic Information",
      description: "Enter basic information about the company.",
      url: UrlsForForm.basicInfo,
    },
    {
      id: "",
      headingId: "flush-headingTwo",
      collapseId: "flush-collapseTwo",
      status: SectionStatus.NOT_STARTED,
      title: "High Risk Factors",
      description:
        "High Risk Factors are improper practices or procedures identified as the most prevalent contributing factors of foodborne illness or injury.",
      url: UrlsForForm.highRiskSection,
    },
    {
      id: "",
      headingId: "flush-headingThree",
      collapseId: "flush-collapseThree",
      status: SectionStatus.NOT_STARTED,
      title: "Low Risk Factors",
      description:
        "Low Risk Factors are preventive measures to control the addition of pathogens, chemicals, and physical objects into foods.",
      url: UrlsForForm.lowRiskSection,
    },
    {
      id: "",
      headingId: "flush-headingFour",
      collapseId: "flush-collapseFour",
      status: SectionStatus.NOT_STARTED,
      title: "Esignature",
      description:
        "The person in charge and health regulatory authority will sign the form.",
      url: "/esign",
    },
  ];
}

export const inspectorFormSections = inspectorFormSectionsFunc();
