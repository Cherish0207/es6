// 深拷贝
// 浅拷贝:默认只展开对象的第一层 --> Object.assign、spread运算符、

let o1 = { name: "zf" };
let o2 = { age: { n: 12 } };

let assgin = { ...o1, ...o2 };

o2.age.n = 13;
console.log(assgin);
