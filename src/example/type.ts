// 类型推论
// 自动识别为number
let xlll = 3;
// 数组
let arr4 = [1, '33', 2];
// 上下文
window.onmousedown = function (event: any) {
    console.log(event);
}
// 兼容性
// 介绍
interface NameInterface {
    name: string;
}
class Person {
    constructor(public name: string) { }
}
let p: NameInterface;
p = new Person('xll');

let nameTest: NameInterface;
let xTest = {
    name: 'xll',
    dd: '',
}
nameTest = xTest;

// 比较
let x2 = (a: number) => 0;
let y2 = (a: number, b: number) => 3;
y2= x2;
// x2= y2; 错误

// 双向协定

