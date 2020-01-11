import wepy from "wepy";

export default class module extends wepy.mixin {
  judgeStatus(name) {
    return new Promise((resolve, reject) => {
      const moduleStatus = wepy.getStorageSync("moduleStatus");
      for (let i of moduleStatus) {
        if (i.moduleName === name && !i.open) {
          if (name !== "课表") {
            this.$redirect({
              url: "/others-page/pages/close"
            });
            reject();
          } else {
            resolve();
          }
          break;
        }
      }
      resolve();
    });
  }
}
