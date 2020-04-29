document.title = 'symbols';
console.log('symbol类型的值是通过Symbol构造函数创建的。');
let sym1 = Symbol();
let sym2 = Symbol('key');
console.log(sym1);
console.log(sym2); // 可选字符串

console.log('Symbols是不可改变且唯一的');
let sym3 = Symbol('xll');
let sym4 = Symbol('xll');
console.log(sym3 === sym4); // false, symbols是唯一的

console.log('像字符串一样，symbols也可以被用做对象属性的键。');

let obKey = Symbol();
let obj: Object = {
    [obKey]: 'symbols key'
}
console.log(obj);

console.log('Symbols也可以与计算出的属性名声明相结合来声明对象的属性和类成员。');
const symbolKey = Symbol.for('Ewenlai');
console.log(Symbol.keyFor(symbolKey));


const getClassNameSysbol = Symbol('ewenlai');
console.log(Symbol.keyFor(getClassNameSysbol)); // undefined
class C {
    [getClassNameSysbol]() {
        return 'getClassNameSysbol for key';
    }
}
let c: C = new C();
console.log(c[getClassNameSysbol]());




