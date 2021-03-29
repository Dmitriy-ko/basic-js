const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("Error");
  if (!arr.some(isTransform)) return arr;
  function isTransform(item) {
    return (
      item === "--discard-prev" ||
      item === "--discard-next" ||
      item === "--double-next" ||
      item === "--double-prev"
    );
  }

  let result = [];

  arr.forEach((item, i, arr) => {
    switch (item) {
      case "--discard-next":
        break;
      case "--discard-prev":
        if (result.length && arr[i - 2] !== "--discard-next") {
          result.pop();
        }
        break;
      case "--double-next":
        if (i !== arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (i !== 0 && arr[i - 2] !== "--discard-next") {
          result.push(arr[i - 1]);
        }
        break;
      default:
        if (arr[i - 1] !== "--discard-next") {
          result.push(item);
        }
        break;
    }
  });

  return result;
};

