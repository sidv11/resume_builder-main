import { UPDATE_INFO } from "../Constant/ActionType";

const updateInfo = (input) => {
  return {
    type: UPDATE_INFO,
    payload: input,
  };
};

export default updateInfo;
