import { UPDATE_EDUCATION } from "../Constant/ActionType";

const updateEducation = (educationData) => {
  return {
    type: UPDATE_EDUCATION,
    payload: educationData,
  };
};

export default updateEducation;
