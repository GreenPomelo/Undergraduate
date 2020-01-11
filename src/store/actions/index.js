import {
  SHOW_GRADUATE_MODAL,
  HIDE_GRADUATE_MODAL,
  JUDGE_MEMORY_MODE_STATUS,
  SET_ISGRADUTE
} from "../types/graduate";
import { createAction } from "redux-actions";
import { checkGraduate } from "@/api/graduateMode";
import wepy from "wepy";

export const showGraduateModal = createAction(SHOW_GRADUATE_MODAL);

export const hideGraduateModal = createAction(HIDE_GRADUATE_MODAL);

export const judgeMemoryModeStatus = createAction(
  JUDGE_MEMORY_MODE_STATUS,
  () => {
    return new Promise(resolve => {
      if (!wepy.getStorageSync("judgeMemoryModeStatus")) {
        checkGraduate().then(response => {
          if (response && response.data) {
            resolve({ chooseMemoryMode: response.data.data });
            wepy.setStorageSync("judgeMemoryModeStatus", {
              chooseMemoryMode: response.data.data
            });
          }
        });
      } else {
        resolve(wepy.getStorageSync("judgeMemoryModeStatus"));
      }
    });
  }
);

export const judgeGraduateStatus = createAction(SET_ISGRADUTE, isGraduate => {
  return new Promise(resolve => {
    if (!wepy.getStorageSync("judgeIsGraduateStatus")) {
      resolve({ graduateIdentity: isGraduate });
      wepy.setStorageSync("judgeIsGraduateStatus", {
        graduateIdentity: isGraduate
      });
    } else {
      resolve(wepy.getStorageSync("judgeIsGraduateStatus"));
    }
  });
});
