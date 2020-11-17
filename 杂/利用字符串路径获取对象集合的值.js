// {'a': [{'b': {'c': 3}}]}   originObj
// a[0].d.c   key
function takeValue(originObj,key) {
    let arrkeys = key.split("."); // [a[0],b,c]
      let data = originObj;
      for (let i = 0; i < arrkeys.length; i++) {
        let item = arrkeys[i].replace(/\[|\]/g, "").split("");
        for (let j = 0; j < item.length; j++) {
          try {
            data = data[item[j]];
          } catch (error) {
            return [`Is err about '${arrkeys[i - 1]}'`, null];
          }
        }
      }
      return [null, data];
}
const originObj = {
    a: [
      {
        b: {
          c: 3
        }
      }
    ]
  };
const key = "a[0].d.c";
console.log(takeValue(originObj,key));