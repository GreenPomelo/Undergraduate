import wepy from "wepy";

export default class ClassMixin extends wepy.mixin {
  getColor(data) {
    var all = data;
    let colorArr = [
      "#47CFF5",
      "#EC7E9B",
      "#F5BE5A",
      "#8BDF64",
      "#47CFF5",
      "#958AEC"
    ];
    let borderColor = [
      "#53A9CA",
      "#C96880",
      "#E4A642",
      "#7CBD50",
      "#61B5BD",
      "#5A54C5"
    ];
    let firstcolor;
    for (var i = 0; i <= all.length - 1; i++) {
      let secondcolor;
      do {
        secondcolor = Math.floor(Math.random() * 6);
      } while (firstcolor ? firstcolor === secondcolor : false);
      firstcolor = secondcolor;
      all[i].bgc = colorArr[secondcolor];
      all[i].borderColor = borderColor[secondcolor];
    }
    return all;
  }
  handleCourses(courses, chosenWeek) {
    let allcourse = courses;
    this.getColor(allcourse);
    let dailyCourse = [];
    let toDealCourse = [];
    let elseCourse = [];
    let nowCourse = [];
    let unshowCourse = [];
    for (let i = 0; i < 7; i++) {
      dailyCourse.push([]);
      toDealCourse.push([]);
      elseCourse.push([]);
      nowCourse.push([]);
      unshowCourse.push([]);
    }
    for (let i of allcourse) {
      if (i.day === 7 || i.day === "7") {
        i.day = 0;
      }
      i.withMoreCourse = false;
      dailyCourse[i.day].push(i);
      // let weekarr = i.weekarr.split(" ");
      let weekarr = i.weekarr;
      i.elementHeight =
        parseInt(i.sectionend - i.sectionstart + 1) * 105 + "rpx";
      if (i.sectionend - i.sectionstart === 3) {
        i.elementHeight =
          parseInt(i.sectionend - i.sectionstart + 1) * 106 + "rpx";
      }
      i.elementTop = parseInt((i.sectionstart - 1) * 108 + 93) + "rpx";
      if (weekarr.indexOf(parseInt(chosenWeek)) === -1) {
        i.bgc = "#D8D8D8";
      }
      toDealCourse[i.day].push(i);
    }
    for (let i in toDealCourse) {
      let courseStart = [];
      let courseEnd = [];
      toDealCourse[i].sort(j => j.bgc === "#D8D8D8");
      for (let j of toDealCourse[i]) {
        if (
          courseStart.indexOf(j.sectionstart) === -1 &&
          courseEnd.indexOf(j.sectionend) === -1
        ) {
          nowCourse[i].push(j);
          courseStart.push(j.sectionstart);
          courseEnd.push(j.sectionend);
        } else {
          elseCourse[i].push(j);
        }
      }
      courseStart = [];
      courseEnd = [];
    }
    for (let i in elseCourse) {
      let courseStart = [];
      let courseEnd = [];
      for (let m of elseCourse[i]) {
        courseStart.push(m.sectionstart);
        courseEnd.push(m.sectionend);
        if (m.weekarr.indexOf(Number(chosenWeek)) !== -1) {
          unshowCourse[i].push(m);
        }
      }
      for (let j of nowCourse[i]) {
        if (
          courseStart.indexOf(j.sectionstart) !== -1 ||
          courseEnd.indexOf(j.sectionend) !== -1
        ) {
          j.withMoreCourse = true;
        }
      }
    }
    nowCourse.push(nowCourse.shift());
    elseCourse.push(elseCourse.shift());
    unshowCourse.push(unshowCourse.shift());
    return [nowCourse, elseCourse, unshowCourse];
  }
}
