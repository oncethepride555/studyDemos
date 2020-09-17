/* console.log(((...args) => { }).length);

console.log((function (a = 1, b, c) {
  return arguments.length;
})(1, 2, 3)); //3

console.log(Function.length); //1 */

var length = "outter";
var obj = {
  length: "inner",
  exec: function () {
    return function () {
      // code
    }
  }
};

var exec = obj.exec();
console.log(exec.length);