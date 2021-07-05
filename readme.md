## 内容

- `ES6` 中的 `Symbol` 的使用
- `ES6` 中的 `set` 和 `map、weakMap、weakSet`
- `spread` 展开运算符，实现一个深拷贝
- `defineProperty` 的使用，`proxy` 使用
- 数组中新增的方法 `compose` 组合函数

## 总结

- `Symbol` 枚举 --> `Reflect.ownKeys`
  (`for in` / `Object.getOwnPropertyNames` / `Object.getOwnPropertySymbols`)
- `Symbol.for` `Symbol.toStringTag` `Symbol.toPrimitive` `Symbol.hasInstance`(instanceof 的实现)
- `Reflect Api`: `get` `set` `has` `apply` `ownKeys`
  (`Reflect.apply` 等价于 `Function.prototype.apply.call`)
- 集合
  - `set` 处理数组的交集、并集、差集
  - `weakMap`弱引用(key 只能是对象):当你给一个属性值设置为 null 时,不会马上回收，会在合适的机会自己清空(浏览器的垃圾回收)
- 深拷贝
  - `JSON.stringify`的缺陷
  - `weakMap`处理深拷贝时的循环引用问题
- `defineProperty` VS `proxy`
- `reduce` --> `compose` (`react-redux`)
