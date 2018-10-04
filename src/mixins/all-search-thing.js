import wepy from "wepy";

export default class allSearch extends wepy.mixin {
  allSearchThing() {
    const AllSearhes = [
      {
        name: "图书馆",
        icon: "https://static.airbob.org/under-graduate/more/library.png",
        isIndex: true,
        id: 0,
        path: "../others-page/pages/library",
        isOpen: true,
        module: "图书馆"
      },
      {
        name: "已借书目",
        icon: "https://static.airbob.org/under-graduate/more/borrow.png",
        isIndex: false,
        id: 1,
        path: "../others-page/pages/library",
        isOpen: true,
        module: "图书馆"
      },
      {
        name: "检索书目",
        icon: "https://static.airbob.org/under-graduate/more/retrieval.png",
        isIndex: false,
        id: 2,
        path: "../others-page/pages/library",
        isOpen: true,
        module: "图书馆"
      },
      {
        name: "座位查询",
        icon: "https://static.airbob.org/under-graduate/more/seat inquiry.png",
        isIndex: false,
        id: 3,
        path: "../others-page/pages/library",
        isOpen: true,
        module: "图书馆"
      },
      {
        name: "一卡通",
        icon: "https://static.airbob.org/under-graduate/more/card.png",
        isIndex: true,
        id: 4,
        path: "../campus-card-page/pages/campus-card-index",
        isOpen: true,
        module: "一卡通"
      },
      {
        name: "校园卡充值",
        icon: "https://static.airbob.org/under-graduate/more/recharge.png",
        isIndex: false,
        id: 5,
        path: "../campus-card-page/pages/campus-card-charge",
        isOpen: true,
        module: "一卡通"
      },
      {
        name: "电费充值",
        icon: "https://static.airbob.org/under-graduate/more/electricity.png",
        isIndex: false,
        id: 6,
        path: "../campus-card-page/pages/electric-charge",
        isOpen: true,
        module: "一卡通"
      },
      {
        name: "校园网充值",
        icon:
          "https://static.airbob.org/under-graduate/more/ campus network.png",
        isIndex: false,
        id: 7,
        path: "../campus-card-page/pages/net-charge",
        isOpen: true,
        module: "一卡通"
      },
      {
        name: "校园卡挂失",
        icon:
          "https://static.airbob.org/under-graduate/more/report the loss.png",
        isIndex: false,
        id: 8,
        path: "../campus-card-page/pages/campus-card-loss",
        isOpen: true,
        module: "一卡通"
      },
      {
        name: "成绩查询",
        icon: "https://static.airbob.org/under-graduate/more/results query.png",
        isIndex: true,
        id: 9,
        path: "../edu-admin-page/pages/score-inquire",
        isOpen: true,
        module: "正方"
      },
      {
        name: "体育部",
        icon: "https://static.airbob.org/under-graduate/more/sport.png",
        isIndex: true,
        id: 10,
        path: "../edu-admin-page/pages/pe-score",
        isOpen: true,
        module: "体育部"
      },
      {
        name: "考试倒计时",
        icon: "https://static.airbob.org/under-graduate/more/exam.png",
        isIndex: false,
        id: 11,
        path: "../edu-admin-page/pages/course",
        isOpen: true,
        module: "正方"
      },
      {
        name: "等级考试",
        icon:
          "https://static.airbob.org/under-graduate/more/rank examination.png",
        isIndex: false,
        id: 12,
        path: "../edu-admin-page/pages/check-grade",
        isOpen: true,
        module: "正方"
      },
      {
        name: "补考查询",
        icon: "https://static.airbob.org/under-graduate/more/resit.png",
        isIndex: true,
        id: 13,
        path: "../edu-admin-page/pages/cut-down",
        isOpen: true,
        module: "正方"
      },
      {
        name: "辅导课查询",
        icon:
          "https://static.airbob.org/under-graduate/more/prenatal class.png",
        isIndex: false,
        id: 14,
        path: "../edu-admin-page/pages/supplement-and-tutorials",
        isOpen: true,
        module: "正方"
      },
      {
        name: "GPA计算器",
        icon: "https://static.airbob.org/under-graduate/more/gpa.png",
        isIndex: false,
        id: 15,
        path: "../others-edu-page/pages/GpaCalculator",
        isOpen: true,
        module: "正方"
      },
      {
        name: "课表",
        icon: "https://static.airbob.org/under-graduate/more/timetable.png",
        isIndex: true,
        id: 16,
        path: "../edu-admin-page/pages/course",
        isOpen: true,
        module: "正方"
      },
      {
        name: "校历",
        icon: "https://static.airbob.org/under-graduate/more/calendar.png",
        isIndex: true,
        id: 17,
        path: "../others-page/pages/calendar",
        isOpen: true,
        module: "校历"
      },
      {
        name: "自主学分",
        icon: "https://static.airbob.org/under-graduate/more/credit.png",
        isIndex: false,
        id: 18,
        path: "../edu-admin-page/pages/credit",
        isOpen: true,
        module: "正方"
      },
      {
        name: "晨跑",
        icon: "https://static.airbob.org/under-graduate/more/run.png",
        isIndex: true,
        id: 19,
        path: "../others-page/pages/run",
        isOpen: true,
        module: "跑操"
      },
      {
        name: "学费查询",
        icon: "https://static.airbob.org/under-graduate/more/tuition.png",
        isIndex: false,
        id: 20,
        path: "../others-page/pages/tuition",
        isOpen: true,
        module: "正方"
      },
      {
        name: "社团招新",
        icon: "https://static.airbob.org/under-graduate/more/club.png",
        isIndex: false,
        id: 21,
        path: "../others-page/pages/association",
        isOpen: true,
        module: "正方"
      },
      {
        name: "认证",
        icon: "https://static.airbob.org/under-graduate/more/club.png",
        isIndex: false,
        id: 22,
        path: "../others-page/pages/auth",
        isOpen: true,
        module: "正方"
      }
    ];
    return AllSearhes;
  }
}
