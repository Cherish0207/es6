let s3 = Symbol.for("jw"); // 声明全新的
let s4 = Symbol.for("jw"); // 把之前声明的拿过来用
console.log(s3 === s4); // true
// (使用较少)

// Symbol还有元编程(可以改写语法本身)的能力
// Symbol 里有一些属性可以改变语法本身

// 1.Symbol.toStringTag 制造一些类型去判断
// typeof: 判断基本类型
// 判断复杂类型时: Object.prototype.toString.call()
// instanceof  constructor
let obj1 = {
  [Symbol.toStringTag]: "jw",
};
console.log(Object.prototype.toString.call(obj1)); // [object jw]

// 2.Symbol.toPrimitive
// 隐式类型转化 toString
let obj2 = {
  [Symbol.toPrimitive](type) {
    // console.log(type); // default
    return "123";
  },
};
console.log(obj2 + "1"); // 1231
console.log({} + "1"); // [object Object]1

// 3.Symbol.hasInstance
let instance = {
  [Symbol.hasInstance](value) {
    // console.log(value); // { name: 'zf' }
    return "name" in value;
  },
};
console.log({ name: "zf" } instanceof instance); // true  __proto__

// instanceof 会查找前面对象的原型链上有没有后面函数的原型对象。
function myInstanceOf(obj, func) {
  const FO = func.prototype; // 获取函数的原型对象
  const Obj = obj.__proto__; // 获取所传进来对象的原型对象
  while (true) {
    if (Obj === null) return false;
    if (Obj === FO) return true;
    Obj = Obj.__proto__;
  }
}

// Symbol.toStringTag Symbol.toPrimitive
// Symbol.iterator
