// 基本数据类型:string number boolean undefined null symbol bigint

// Symbol() 创建独一无二的类型
let s1 = Symbol("cherish");
let s2 = Symbol("cherish");
// console.log(s1 === s2); // false

// 用途/使用场景:
// 1.作为对象的key来使用
// - Symbol属性默认不能枚举
// 无法通过(for in/Object.keys获取普通类型的key)遍历到
//  -->Object.getOwnPropertySymbols(obj):获取obj对象所有symbol
let obj = {
  name: "zf",
  age: 12,
  [s1]: "ok",
};
// console.log(obj);
for (let key in obj) {
  console.log(obj[key]);
}
// zf 12
console.log(Object.keys(obj)); // [ 'name', 'age' ]
const k = console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(cherish) ]

// 那么问题来了,如果想要遍历到对象包括symbol在内的所有属性值怎么办? --> Reflect
Reflect.ownKeys(obj).forEach((item) => {
  console.log(item); // 获取所有的key属性
});
