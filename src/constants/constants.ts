export const UrlsForForm = {
  basicInfo: "/basic-info",
  lowRiskSection: "/low-risk",
  highRiskSection: "/high-risk",
};

export const highRiskQuestions = [
  {
    section: "Demonstration of Knowledge",
    rows: [
      {
        number: 1,
        title:
          "PIC certified by accredited program, or compliance with Code, or correct answers",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 5,
      },
      {
        number: 2,
        title:
          "Food Worker Cards current for all food workers new food workers trained",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 5,
      },
    ],
  },
  {
    section: "Employee Health",
    rows: [
      {
        number: 1,
        title:
          "Proper ill worker and conditional employee practices; no ill practices workers present proper reporting of illness",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 25,
      },
    ],
  },
  {
    section: "Preventing Contamination by Hands",
    rows: [
      {
        number: 1,
        title: "Hands washed as required",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 25,
      },
      {
        number: 2,
        title:
          "Proper barriers used to prevent bare hand contact with ready to eat foods",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 25,
      },
      {
        number: 2,
        title: "Adequate handwashing facilities",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 10,
      },
    ],
  },
  {
    section: "Approved Source, Wholesome, Not Adulterated",
    rows: [
      {
        number: 1,
        title: "Food obtained from approved source",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 15,
      },
      {
        number: 2,
        title: "Water supply, ice from approved source",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 15,
      },
      {
        number: 2,
        title: "Proper washing of fruits and vegetables",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 10,
      },
      {
        number: 2,
        title:
          "Food in good condition, safe and unadulterated approved additives",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 10,
      },
      {
        number: 2,
        title:
          "Proper disposition of returned, previously served unsafe, or contaminated food",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 10,
      },
      {
        number: 2,
        title:
          "OProper shellstock identification; wild mushroom ID parasite destruction procedures for fish",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 5,
      },
    ],
  },
  {
    section: "Employee Health",
    rows: [
      {
        number: 1,
        title:
          "Food contact surfaces and utensils used for raw meat thoroughly cleaned and sanitized. No cross15 contamination",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 25,
      },
      {
        number: 1,
        title:
          "Raw meats below or away from ready to eat food; species separated",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 25,
      },
      {
        number: 1,
        title: "Proper handling of pooled eggs",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 25,
      },
    ],
  },
];

export const lowRiskQuestions = [
  {
    section: "Food Temperature Control",
    rows: [
      {
        number: 1,
        title: "Food received at proper temperature",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 5,
      },
      {
        number: 1,
        title: "Adequate equipment for temperature control",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 5,
      },
      {
        number: 1,
        title: "Proper thawing methods used",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 3,
      },
    ],
  },
  {
    section: "Food Identification",
    rows: [
      {
        number: 1,
        title: "Proper labeling, signage",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 5,
      },
    ],
  },
  {
    section: "Protection from Contamination",
    rows: [
      {
        number: 1,
        title: "Insects, rodents, animals not present; entrance controlled",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 5,
      },
      {
        number: 1,
        title:
          "Potential food contamination prevented during delivery,5 preparation, storage, display",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 5,
      },
      {
        number: 1,
        title: "Wiping cloths properly used, stored; proper sanitizer",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 5,
      },
      {
        number: 1,
        title: "Employee cleanliness and hygiene",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 3,
      },
      {
        number: 1,
        title: "Proper eating, tasting, drinking, or tobacco use",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 3,
      },
    ],
  },
  {
    section: "Proper Use of Utensils",
    rows: [
      {
        number: 1,
        title: "In-use utensils properly stored",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 3,
      },
      {
        number: 1,
        title: "Utensils, equipment, linens properly stored, used, handled",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 3,
      },
      {
        number: 1,
        title: "Single-use and single-service articles properly stored, used",
        correctedDuringInspection: false,
        repeatViolation: false,
        pts: 3,
      },
    ],
  },
];
