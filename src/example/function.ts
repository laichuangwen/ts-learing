document.title = 'function';
// 基本函数
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(1, 2));

// 可选参数和默认参数

function add1(x: number, y?: number): number {
    return y ? x + y : x;
}
console.log(add1(1));
console.log(add1(1, 2));

function add2(x: number, y: number = 5): number {
    return x + y;
}
console.log(add1(4));

// 剩余参数
function add3(x: number, ...other: number[]): number {
    return x + other.reduce((total, item) => total + item);
}
console.log(add3(1, 2, 3, 5));
