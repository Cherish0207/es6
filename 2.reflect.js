// ES6 后续新增的方法都放在Reflect上 --> Object
// defineProperty -> Reflect
// Reflect.get  Reflect.set Reflect.delete

const fn = (a, b) => {
  console.log("fn", a, b);
};
// Q:如果一个函数有自己定义的apply方法,如何调用Function本身的apply?
fn.apply = function () {
  console.log("apply");
};
// 1.call让apply方法中的this指向fn，并让apply方法执行
// call的作用:1.让函数apply执行; 2.改变apply中的this指向fn
// Function.prototype.apply.call(fn,null,[1,2]);// fn.apply(null,[1,2])

// 2.
Reflect.apply(fn, null, [1, 2]);

// Reflect有13种方法,常用Api:
// ownKeys()  apply()  结合proxy (set has delete)
