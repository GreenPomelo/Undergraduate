import wepy from "wepy";

export default class ClassMixin extends wepy.mixin {
  getColor(data) {
    var all = data;
    let colorArr = ["#6AD5E1", "#87E5DA", "#F7C562", "#FFB677", "#FF8364"];
    let borderColor = ["#44888F", "#57938C", "#9C7C3E", "#A7784F", "#9C503D"];
    let firstcolor;
    for (var i = 0; i <= all.length - 1; i++) {
      let secondcolor;
      do {
        secondcolor = Math.floor(Math.random() * 5);
      } while (firstcolor ? firstcolor === secondcolor : false);
      firstcolor = secondcolor;
      all[i].bgc = colorArr[secondcolor];
      all[i].borderColor = borderColor[secondcolor];
    }
    return all;
  }

  /**
   * 计算课的与上边界的距离
   * @param {Object} courseItem
   * @returns {Object}
   */
  getElementHeight(courseItem) {
    const { sectionend, sectionstart } = courseItem;
    return (
      parseInt(sectionend - sectionstart + 1) *
        (sectionend - sectionstart === 3 ? 106 : 105) +
      "rpx"
    );
  }

  /**
   * 计算课的高度
   * @param {Object} courseItem
   * @returns {Object}
   */
  getElementTop(courseItem) {
    const { sectionstart } = courseItem;
    return parseInt((sectionstart - 1) * 108 + 93) + "rpx";
  }

  /**
   * @param {Object} courseItem 想搜寻的课
   * @param {Array} courses 从哪些课中搜寻
   * @returns {Boolean} 是否有相同时间的课
   */
  getCourseItemAtSameTimeIndex(courseItem, courses) {
    const { day, sectionstart, sectionend } = courseItem;
    return courses.findIndex(
      x =>
        x !== courseItem &&
        x.day === day &&
        x.sectionstart === sectionstart &&
        x.sectionend === sectionend
    );
  }

  /**
   *
   * @param {Array} courses 所有的课程
   * @param {Number} chosenWeek 当前的周次
   * @param {Boolean} onlyShowThisWeek 是否为只显示单周模式,为true时为显示单双周模式
   * @returns {[Array<Object>,Array<Object>]} shownCourse unShownCourse
   */
  handleCourses(courses, chosenWeek, onlyShowThisWeek) {
    courses = this.getColor(courses);
    const shownCourse = [[], [], [], [], [], [], []]; // 一个二维数组，每个元素为本周当天需要上的课
    const unShownCourse = [[], [], [], [], [], [], []]; // 一个二维数组，每个元素为本周当天不需要上的课

    // 遍历courses,计算courses中的每个元素的bgc,elementHeight,elemntTop
    for (const course of courses) {
      if (course.day === 7 || course.day === "7") {
        course.day = 0;
      }
      course.elementHeight = this.getElementHeight(course);
      course.elementTop = this.getElementTop(course);
      course.withMoreCourse = false;
    }
    // 将courses中的course进行分组,分入unShownCourse和shownCourse中
    for (const course of courses) {
      const { day, weekarr } = course;
      if (!weekarr.includes(chosenWeek)) {
        course.bgc = "#D8D8D8";
        if (!onlyShowThisWeek) {
          shownCourse[day].push(course);
        }
      } else {
        shownCourse[day].push(course);
      }
    }

    const allShownCourse = shownCourse.reduce(
      (total, current) => total.concat(current),
      []
    );
    const allUnShownCourse = unShownCourse.reduce(
      (total, current) => total.concat(current),
      []
    );

    for (const dailyCourses of shownCourse) {
      // 对shownCourse中的每个数组排序，使本周会上的课排在前面
      dailyCourses.sort(course => (course.bgc === "#D8D8D8" ? -1 : 1));

      // 使有不止一个课的时间段的课,withMoreCourse 为true
      for (const dailyCoursesItem of dailyCourses) {
        const swipperCourseAtSameTimeIndex = this.getCourseItemAtSameTimeIndex(
          dailyCoursesItem,
          allShownCourse.concat(allUnShownCourse)
        );
        if (swipperCourseAtSameTimeIndex !== -1) {
          dailyCoursesItem.withMoreCourse = true;
        }
      }
    }

    // 将shownCourse和unShownCourse中的最后一个元素移到前面
    shownCourse.push(shownCourse.shift());
    unShownCourse.push(unShownCourse.shift());

    // 过滤掉课程出现重叠的课程
    const newShownCourse = shownCourse.map(dailyCourses =>
      dailyCourses.filter(
        course =>
          !(
            course.bgc === "#D8D8D8" &&
            dailyCourses.find(
              x =>
                x !== course &&
                x.sectionstart >= course.sectionstart &&
                x.sectionend <= course.sectionend
            )
          )
      )
    );

    return [newShownCourse, unShownCourse];
  }
}
