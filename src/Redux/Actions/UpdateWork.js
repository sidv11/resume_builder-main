import { UPDATE_WORK } from "../Constant/ActionType";

const updateWork = (workData) => {
  return {
    type: UPDATE_WORK,
    payload: workData,
  };
};

export default updateWork;
