import SelectTemplateReducer from "./SelectTemplateReducer";
import UpdateInfoReducer from "./UpdateInfoReducer";
import UpdateWorkReducer from "./UpdateWorkReducer";
import updateEducationReducer from "./UpdateEducationReducer";
import updateSkillReducer from "./UpdateSkillReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  Select_template: SelectTemplateReducer,
  Update_info: UpdateInfoReducer,
  Update_work: UpdateWorkReducer,
  Update_education: updateEducationReducer,
  Update_skill: updateSkillReducer,
});

export default RootReducer;
