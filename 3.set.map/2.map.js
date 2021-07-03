// 不能有重复的key
let map = new Map([
  ["a", 1],
  ["v", 1],
  ["v", 1],
]);
map.set({ a: 1 }, 2); // key可以是对象类型
console.log(map); // Map(3) { 'a' => 1, 'v' => 1, { a: 1 } => 2 }

console.log(Object.prototype.toString.call(new Map())); // [object Map]
console.log(Object.prototype.toString.call(new Set())); // [object Set]
