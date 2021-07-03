let obj = {};

// 使用defineProperty需要定义第三方参数才能控制set和 get
let _value;
Object.defineProperty(obj, "a", {
  // 描述符号
  enumerable: true, // 遍历对象可以被遍历
  configurable: true, // 可以被删除
  //writable:true,
  get() {
    return _value;
  },
  set(newValue) {
    _value = newValue;
  },
});
obj.a = 100;
console.log(obj.a);

// defineProperty:给本来的属性可以用此方法来定义，并且可以把值转化成get和set
/**
 * vue2 使用 defineProperty 的缺点:
 * 1. 性能不好
 * 1.1 把对象的属性全部转化成 getter + setter，需要遍历所有对象，用Object.defineProperty重新定义所有属性
 * 1.2 如果是数组,对每个索引都采用这种方式,性能很差
 * 1.3 如果对象里嵌套对象,需递归处理
 *
 * proxy 是es6 的api,不用改写原对象，但兼容差
 * vue3 使用 Proxy 的优点:
 * 不需要重写对象属性，而且不需要递归 + 当访问到的属性值是对象时再代理即可
 */

let proxy = new Proxy(obj, {
  get() {}, //proxy.xxx
  set() {}, // proxy.xxx = 100
  has() {}, // 'xxx' in proxy
  deleteProperty() {}, // 删除属性时后执行
  ownKeys() {}, // Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols
});
