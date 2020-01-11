import { handleActions } from "redux-actions";
import {
  SHOW_GRADUATE_MODAL,
  HIDE_GRADUATE_MODAL,
  JUDGE_MEMORY_MODE_STATUS,
  SET_GRADUATE_FALSE,
  SET_ISGRADUTE
} from "../types/graduate";

export default handleActions(
  {
    [SHOW_GRADUATE_MODAL](state) {
      return {
        ...state,
        graduateModalStatus: true
      };
    },
    [HIDE_GRADUATE_MODAL](state) {
      return {
        ...state,
        graduateModalStatus: false
      };
    },
    [SET_GRADUATE_FALSE](state) {
      return {
        ...state,
        graduateIdentity: false
      };
    },
    [JUDGE_MEMORY_MODE_STATUS](state, action) {
      return {
        ...state,
        chooseMemoryMode: action.payload.chooseMemoryMode
      };
    },
    [SET_ISGRADUTE](state, action) {
      return {
        ...state,
        graduateIdentity: action.payload.graduateIdentity
      };
    }
  },
  {
    graduateModalStatus: false,
    graduateIdentity: false,
    chooseMemoryMode: false
  }
);
