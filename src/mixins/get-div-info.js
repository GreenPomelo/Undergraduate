import wepy from "wepy";

export default class getDivInfoMixin extends wepy.mixin {
  // id 为字符串"#XXX"形式
  // 调用方式：
  //  import getDivInfoMixin   mixins = [getDivInfoMixin];
  // from "@/mixins/get-div-info.js";
  //     that.getDivInfo("#XXX").then(res => {
  //     });
  // 在回调函数中获取元素信息：res为对象{height: 150, width: 375, left: 0, right: 375, top: 130…}
  getDivInfo(id) {
    return new Promise((resolve, reject) => {
      let query = wepy.createSelectorQuery();
      query.select(id).boundingClientRect();
      query.exec(res => {
        let divInfo = {};
        divInfo.height = res[0].height; // px
        divInfo.width = res[0].width; // px
        divInfo.left = res[0].left; // px
        divInfo.right = res[0].right; // px
        divInfo.top = res[0].top; // px
        divInfo.bottom = res[0].bottom; // px
        divInfo.dataset = res[0].dataset;
        resolve(divInfo);
      });
    });
  }
}
