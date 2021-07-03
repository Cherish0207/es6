// 数据类型 set map weakMap weakSet
// set：值不重复（去重）

// 使用 、 区别 传值和性能

let set = new Set([1, 2, 1, 1, 2, 1, 1, 3, "a"]);
set.add(5);
set.add({ a: 1 });
console.log(set.entries(set)); // 等价于Object.entries,获取key和值  Object.keys Object.values
console.log(set.has(5));

// 可以借助set处理数组的交集、并集、差集
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

function union(arr1, arr2) {
  let s = new Set([...arr1, ...arr2]); // 集合 Set集合可以被迭代(内部有Symbol.iterator方法)
  return [...s];
}
function intersection(arr1, arr2) {
  let s1 = new Set(arr1); // forEach
  let s2 = new Set(arr2);
  return [...s1].filter((item) => {
    return s2.has(item);
  });
}
function section(arr1, arr2) {
  let s1 = new Set(arr1); // forEach
  let s2 = new Set(arr2);
  return [...s1].filter((item) => {
    return !s2.has(item);
  });
}
console.log(union(arr1, arr2));
console.log(intersection(arr1, arr2));
console.log(section(arr1, arr2));

// 差集:得看谁减少谁 1 - 2 、 2 - 1
