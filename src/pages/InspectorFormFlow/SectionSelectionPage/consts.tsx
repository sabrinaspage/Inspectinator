import { ReactNode } from "react";
import { UrlsForForm } from "../../../constants/constants";
import { InspectorFormSectionType } from "../../../contexts/InspectorFormContext";

export enum SectionStatus {
  NOT_STARTED,
  SAVED,
}

export interface InspectorFormSection {
  id: string;
  token?: InspectorFormSectionType;
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
      token: InspectorFormSectionType.BASIC_INFO,
      headingId: "flush-headingOne",
      collapseId: "flush-collapseOne",
      status: SectionStatus.NOT_STARTED,
      title: "Basic Information",
      description: "Enter basic information about the company.",
      url: UrlsForForm.basicInfoSection,
    },
    {
      id: "",
      token: InspectorFormSectionType.HIGH_RISK,
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
      token: InspectorFormSectionType.LOW_RISK,
      headingId: "flush-headingThree",
      collapseId: "flush-collapseThree",
      status: SectionStatus.NOT_STARTED,
      title: "Low Risk Factors",
      description:
        "Low Risk Factors are preventive measures to control the addition of pathogens, chemicals, and physical objects into foods.",
      url: UrlsForForm.lowRiskSection,
    },
  ];
}

export const inspectorFormSections = inspectorFormSectionsFunc();
