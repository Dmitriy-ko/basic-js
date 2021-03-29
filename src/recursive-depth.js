const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let arrDepth = 0;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        count = this.calculateDepth(item);
        if (arrDepth < count) arrDepth = count;
      }
    });
    return arrDepth + 1;
  }
};
