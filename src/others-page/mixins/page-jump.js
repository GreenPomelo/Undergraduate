import wepy from "wepy";

export default class allSearch extends wepy.mixin {
  methods = {
    toAssociationHome() {
      /**
       * 如果路由栈中，招新首页前面还有页面，就navigateBack到招新首页
       * 如果路由栈中，不存在招新首页，或者路由栈最底层是招新首页，就reLaunch到招新首页
       */
      const routes = getCurrentPages();
      const ASSOCIATION_PATH = "others-page/pages/associationPages/association";
      const index = routes.findIndex(page => page.route === ASSOCIATION_PATH);
      if (index > 0) {
        const deps = routes.length - index - 1;
        wepy.navigateBack({
          delta: deps
        });
      } else {
        wepy.reLaunch({ url: `/${ASSOCIATION_PATH}` });
      }
    }
  };
}
