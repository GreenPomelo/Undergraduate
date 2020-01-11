import wepy from "wepy";
import {
  sumCredits,
  termReducer,
  sumCreditMultiplyPoint,
  handleSum,
  handleTerm
} from "./utils";

export default class GpaMixin extends wepy.mixin {
  /**
   * 处理成绩的逻辑
   * @param { Array } scores 各学期所有的成绩
   */
  handleScores(scores) {
    if (this.hasData()) {
      return {
        credits: sumCredits(),
        scores: termReducer(),
        sumOfCreditMultiplyPoint: sumCreditMultiplyPoint() // 获取总的 [学分 * 绩点]
      };
    }
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      /**
       *  isEnd 判断是否是 最后一条成绩的记录
       *  用于判断是否到了累加最后一个学期的所有成绩的时候
       */
      let isEnd = false;
      if (i === scores.length - 1) isEnd = true;
      handleSum(score);
      handleTerm(score, isEnd);
    }
    return {
      credits: sumCredits(),
      scores: termReducer(),
      sumOfCreditMultiplyPoint: sumCreditMultiplyPoint() // 获取总的 [学分 * 绩点]
    };
  }

  /**
   * 处理绩点变动的逻辑，关注两个关键量
   * sumOfCreditMultiplyPoint 总（学分 * 单科绩点）的变化量
   * credits 总学分 的变化量
   */
  handleModifyScore(sumOfCreditMultiplyPoint, credits) {
    this.sumOfCreditMultiplyPoint += sumOfCreditMultiplyPoint;
    this.credits += credits;
  }

  processScoreInput({ value: score }, type) {
    score = this.discardUnnecessaryChars(score);
    score = this.limitScore(score);
    score = score.length === 0 ? 0 : score;
    this.$emit(type, this.$index, score);
    return score;
  }

  discardUnnecessaryChars(value) {
    return value.replace(/[^\d.]/g, "");
  }

  limitScore(score) {
    if (Number(score) > 100) {
      // 如果 score 大于 100，截断后面的
      if (Number(score.slice(0, 3)) === 100) {
        score = score.slice(0, 3);
      } else {
        score = score.slice(0, 2);
      }
    }
    return score;
  }

  hasData() {
    return sumCredits() !== 0;
  }
}
