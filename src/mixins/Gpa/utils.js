// 延迟计算
const curry = (fn, ...optionalArgs) => {
  const cache = [];
  return (...args) => {
    if (args.length === 0) return fn(cache, ...optionalArgs);
    else cache.push(args[0]);
  };
};

const sum = ary => {
  let result = 0;
  for (const value of ary) result += Number(value);

  return result;
};

/**
 * 累加单个学期的成绩
 * @param { Array }   scores  成绩对象的数组
 * @param { string }  year    年份
 * @param { string }  term    学期
 */
const reduceScores = (scores, year, term) => {
  /**
   * 返回一个对象
   * title 显示在卡片顶部的标题
   * courses 具体的课程成绩
   */
  const termScores = {
    title: `${year}学年 第${Number(term) === 1 ? `一` : `二`}学期`,
    scores: [],
    isFolded: true,
    count: 0
  };

  for (const score of scores) {
    termScores.scores.push(score);
  }

  termScores.scores.sort((a, b) => Number(b.credit) - Number(a.credit));
  termScores.count = termScores.scores.length;

  return termScores;
};

/**
 * 累加各学期的成绩
 * @param { Array } terms  各学期成绩的数组
 */
const reduceAllTeams = terms => {
  /**
   * 返回各学期成绩的数组
   */
  const allScores = [];
  for (const term of terms) {
    allScores.unshift(term);
  }
  return allScores;
};

const isTheSameTerm = (currentYear, year, currentTerm, term) =>
  currentYear === year && currentTerm === term;

const mapScore = score => {
  switch (score) {
    case `优秀`:
      return 95;
    case `良好`:
      return 85;
    case `中等`:
      return 75;
    case `及格`:
      return 65;
    default:
      return Number(score);
  }
};

const currySum = () => curry(sum);
export const sumCredits = currySum();
export const sumCreditMultiplyPoint = currySum();
export const termReducer = curry(reduceAllTeams);

/**
 * 需要关注的属性
 * credit 学分
 * point 单科绩点
 * type 课程类型
 */

export const handleSum = ({ credit, point, courseType: type }) => {
  // 任选课不统计学分
  if (type === `任选`) return;
  sumCredits(Number(credit));
  sumCreditMultiplyPoint(Number(credit) * Number(point));
};

export const handleTerm = (() => {
  /**
   * 闭包保存几个变量，用于判断累加
   * currentYear  当前年份
   * currentTerm  当前学期
   * scoreReducer 当前学期的成绩累加器
   */
  let currentYear = ``;
  let currentTerm = ``;
  let scoreReducer = null;

  return (
    {
      courseName: name,
      credit,
      point,
      score,
      resitScore,
      retakeScore,
      year,
      term,
      courseType: type
    },
    isEnd
  ) => {
    /**
     * 如果年份和学期不一样了，那自然是到了别的学期，
     * 如果之前的 scoreReducer 不为 null, 累加之前学期记录的成绩
     */
    if (!isTheSameTerm(currentYear, year, currentTerm, term)) {
      if (scoreReducer) {
        termReducer(scoreReducer());
      }
      scoreReducer = curry(reduceScores, year, term);
      currentYear = year;
      currentTerm = term;
    }

    score = mapScore(score);
    resitScore = mapScore(resitScore);
    retakeScore = mapScore(retakeScore);

    const scoreItem = {
      name,
      credit: Number(credit).toFixed(1),
      point: Number(point),
      score: Math.max(score, resitScore, retakeScore),
      isOptionalCourses: type === `任选`,
      isEditing: false,
      shouldFocus: false
    };
    scoreReducer(scoreItem);

    if (isEnd) {
      termReducer(scoreReducer());
      currentYear = currentTerm = scoreReducer = null;
    }
  };
})();
