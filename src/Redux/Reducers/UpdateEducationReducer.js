import { UPDATE_EDUCATION } from "../Constant/ActionType";

let INIT_STATE = [];

const updateEducationReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_EDUCATION:
      return action.payload || state;
    default:
      return state;
  }
};

export default updateEducationReducer;
