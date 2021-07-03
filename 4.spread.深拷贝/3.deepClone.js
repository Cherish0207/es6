// 拷贝对象上的每个属性
// 深拷贝 1.直接递归对象; 2.利用栈简化递归操作

// typeof instanceof toString constructor

function deepClone(obj) {
  if (obj == null) return obj; // null == undefined // true
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  // ....
  if (typeof obj !== "object") return obj;

  // obj是对象类型( []、{})
  // [].constructor; // ƒ Array
  // {}.constructor; // ƒ Object
  const copy = new obj.constructor();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
}
var o = { a: "1", name: { n: "xxx" } };
// o.b = {};
// o.b.a = o.b;
// const deepO = deepClone(o);// Maximum call stack size exceeded
o.name.n = "aaa";
console.log(deepO);
