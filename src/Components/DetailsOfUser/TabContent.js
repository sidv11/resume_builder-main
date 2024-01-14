import React from "react";
import PersionalInfo from "./PersionalInfo";
import WorkExperienceDetails from "./WorkExperienceDetails";
import EducationDetails from "./EducationDetails";
import KeySkillsDetails from "./KeySkillsDetails";

const TabContent = ({ activeTab, handleNextTab, handlePreviousTab }) => {
  const renderContent = (index) => {
    switch (index) {
      case 0:
        return <PersionalInfo handleNextTab={handleNextTab} />;
      case 2:
        return (
          <WorkExperienceDetails
            handleNextTab={handleNextTab}
            handlePreviousTab={handlePreviousTab}
          />
        );
      case 4:
        return (
          <EducationDetails
            handleNextTab={handleNextTab}
            handlePreviousTab={handlePreviousTab}
          />
        );
      case 6:
        return <KeySkillsDetails handlePreviousTab={handlePreviousTab} />;
      default:
        return null;
    }
  };
  return <div>{renderContent(activeTab)}</div>;
};

export default TabContent;
