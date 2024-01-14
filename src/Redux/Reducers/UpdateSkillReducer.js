import { UPDATE_SKILL } from "../Constant/ActionType";

let INIT_STATE = [];

const updateSkillReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_SKILL:
      return action.payload || state;
    default:
      return state;
  }
};

export default updateSkillReducer;
