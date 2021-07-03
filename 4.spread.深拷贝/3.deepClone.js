// 拷贝对象上的每个属性
// 深拷贝 1.直接递归对象; 2.利用栈简化递归操作

// typeof instanceof toString constructor

// hash:记录拷贝前和拷贝后的对应关系
function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj; // null == undefined // true
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  // ....
  if (typeof obj !== "object") return obj;

  // obj是对象类型( []、{})

  if (hash.has(obj)) return hash.get(obj); // 返回上次拷贝的结果,不再递归

  // [].constructor; // ƒ Array
  // {}.constructor; // ƒ Object
  const copy = new obj.constructor();
  hash.set(obj, copy); // 引用类型
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key], hash);
    }
  }
  return copy;
}
// 拷贝过的对象,不需要再次拷贝
var o = { a: "1", name: { n: "xxx" } };
o.b = {};
o.b.a = o.b;
const deepO = deepClone(o);
console.log(deepO);
