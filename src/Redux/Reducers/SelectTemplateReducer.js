import {
  TEMPLATE_ONE,
  TEMPLATE_TWO,
  TEMPLATE_THREE,
  TEMPLATE_FOUR,
} from "../Constant/ActionType";

const INIT_STATE = TEMPLATE_ONE;

const SelectTemplateReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TEMPLATE_ONE:
      return TEMPLATE_ONE;
    case TEMPLATE_TWO:
      return TEMPLATE_TWO;
    case TEMPLATE_THREE:
      return TEMPLATE_THREE;
    case TEMPLATE_FOUR:
      return TEMPLATE_FOUR;
    default:
      return state;
  }
};

export default SelectTemplateReducer;
