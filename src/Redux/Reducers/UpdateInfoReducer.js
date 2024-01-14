import { UPDATE_INFO } from "../Constant/ActionType";

let INIT_STATE = "";

let UpdateInfoReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default UpdateInfoReducer;
