const CustomError = require("../extensions/custom-error");
 module.exports = function countCats(matrix) {
  let Cats = 0;

  matrix.forEach(array => {
   array.forEach(element => {
     if (element === '^^') {
        Cats++;
      }
     });
  });
  console.log(Cats);
   return Cats;
 };
