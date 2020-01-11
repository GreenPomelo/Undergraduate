import { handleActions } from "redux-actions";
import { ENTER_VISITOR_MODE, EXIT_VISITOR_MODE } from "../types/visitor-mode";

export default handleActions(
  {
    [ENTER_VISITOR_MODE](state) {
      return {
        ...state,
        visitorModeStatus: true
      };
    },
    [EXIT_VISITOR_MODE](state) {
      return {
        ...state,
        visitorModeStatus: false
      };
    }
  },
  {
    visitorModeStatus: false
  }
);
