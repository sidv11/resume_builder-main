import { UPDATE_WORK } from "../Constant/ActionType";

let INIT_STATE = [];

const UpdateWorkReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_WORK:
      return action.payload || state;
    default:
      return state;
  }
};

export default UpdateWorkReducer;
