import { UPDATE_SKILL } from "../Constant/ActionType";

const updateSkill = (skillData) => {
  return {
    type: UPDATE_SKILL,
    payload: skillData,
  };
};

export default updateSkill;
