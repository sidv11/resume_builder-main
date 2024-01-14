import {
  TEMPLATE_ONE,
  TEMPLATE_TWO,
  TEMPLATE_THREE,
  TEMPLATE_FOUR,
} from "../Constant/ActionType";

const T1 = () => {
  return {
    type: TEMPLATE_ONE,
  };
};

const T2 = () => {
  return {
    type: TEMPLATE_TWO,
  };
};

const T3 = () => {
  return {
    type: TEMPLATE_THREE,
  };
};

const T4 = () => {
  return {
    type: TEMPLATE_FOUR,
  };
};

export { T1, T2, T3, T4 };
