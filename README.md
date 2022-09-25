# Inspectinator  

## Inspiration ✨

The founder, who lives in New York City, loves to go to restaurants and cafes for her usual tea and bacon, egg and cheese sandwiches. As she wanders from restaurant to cafe, she notices how restaurants are graded by letters A through C. She finds herself attending A rated cafes more than C rated restaurants, since it turns out these letter grades represent the cleanliness and tidiness of the dining establishments. A point-based system calculation yields the letter results for the public to see. This calculation is determined by an inspection process hosted by [the New York City Department of Health and Mental Hygiene](https://www1.nyc.gov/site/doh/index.page).

Typically, restaurants anticipate at least 1 annual surprise visit from an inspector. These visits will determine a new restaurant grade. Depending on each compliance status, points are assigned to a restaurant to determine the weight of the status' importance, and inspectors assign a letter based on the range of points: A for the lowest points, B for medium points, and C for highest points. However, it doesn't seem there is software that makes the inspection process easy -- everything is done through paperwork.

**Inspectinator** 🔎 exists so restaurant inspections nationwide can be accessible and automated. We want to automate health inspections so that health inspectors can easily send legal documents to health departments regarding their research on restaurants they have investigated. Health inspection depends on relatively small templates by small businesses, which HelloSign targets. By the end, the inspector and restaurant will sign off with HelloSign’s electronic signature.  

## Sources 📝
https://www1.nyc.gov/site/doh/services/restaurant-grades.page
https://kingcounty.gov/healthservices/health/environmental-health/food-safety/inspection-system/~/media/depts/health/environmental-health/documents/food-safety/sample-food-inspection-form.ashx

## What it does 🏃
An inspector will land on the landing page and either register or login. They will then land on their dashboard with all existing inspection forms, all of which belong to a company they inspected. An inspector can either preview each form or create a new form. When they create a new form, they can start off with basic information and then enter high priority information or low priority information. They will then be led to review the form and sign off on the inspection with HelloSign.  

## How we built it 🚧
We designed with Figma
We used BootStrap, React, TypeScript, and NPM for our frontend.
We used MongoDB for the backend.
We will deploy with Netlify.  

## Instructions 📝  
Navigate to the 'server' folder and run  
```node server.js```  
Then, run  
```npm start```  
from the root project directory  
OR  
Go to the link: https://inspectinator.netlify.app/

## Challenges we ran into 🛡️
- one of our team members was traveling in Thailand and Chicago along with miscellaneous activities
- another team member was interviewing companies for a full-time job/internship
- combatting coding challenges with team members of varying experiences
- time constraints of college classes and jobs amongst us all

## Accomplishments that we're proud of 💪
- team organization and collaboration. we made it work somehow.
- communication with HelloSign developers to address concerns regarding documentation

## What we learned 🧠
- How to read HelloSign and MongoDB documentation
- How to make better use of React and TypeScript
- How to be better frontend developers and use Figma

## What's next for Inspectinator 🔎
We have a whole bunch of ideas for **Inspectinator** 🔎! We wanted to get core functionality out of the way first.
- Automatic restaurant score calculation
- Give inspectors the option to write notes next to each form section
- Implement 'Decline to Sign' feature to e-signature process
- If the client e-signature is pending, allow inspectors a way to easily send email reminders.