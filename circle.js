class Circle {
  area(r) {
    return Math.PI * r * r;
  }

  circumference(r) {
    return 2 * Math.PI * r;
  }
}

module.exports = Circle;

// exports.area = function (r) {
//   return;
// };

// exports.circumference = function (r) {
//   return 2 * Math.PI * r;
// };
