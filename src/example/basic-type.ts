document.title = '基础类型';

console.log('---布尔');
let isDone: boolean = false;
console.log(isDone);

console.log('---数字');

let decL: number = 10;
console.log('十进制10', decL);

let hexL: number = 0xff;
console.log('十六进制0xff', hexL);

let binL: number = 0b01;
console.log('二进制0b01', binL);

let octL: number = 0o1;
console.log('八进制0o1', octL);

let username: string = 'ewen';
console.log('名字', username);
username = 'ewenlai';
console.log('名字', username);
let modeName: string = `我的名字:${username}`;
console.log(modeName);

console.log('---数组');

let list: number[] = [1, 2, 3];
console.log('数字数组number[]', list);
let arr: Array<number> = [1, 3, 4];
console.log('Array<number>', arr);
let moreList: (number | string)[] = [1, 'ddd'];
console.log('多类型(number | string)[] ', moreList);
let moreArr: Array<number | string | boolean> = [1, 'ddddddd', false];
console.log('多类型Array<number|string|boolean>', moreArr);

console.log('---元组');

//let x :[string,number] = [1,'dd']; err
let x: [string, number] = ['222', 1];
console.log('元组tuple', x);
console.log('元组tuple', x[0]);
console.log('元组tuple', x[1]);
// console.log('元组tuple', x[2]);

console.log('---枚举enum');

enum Color {
    Red = 1,
    Green,
    Blue,
}
console.log('enum', Color);
let green: Color = Color.Green;
console.log(green);
console.log('index', Color[2]);

console.log('---any');
let anyD: any = 2;
console.log(anyD);
anyD = false;
console.log(anyD);
anyD = 'ddddd';
console.log(anyD);
let listAny: Array<any> = [1, '3333', false];
console.log(listAny);

console.log('viod');

function sayName(): void {
    console.log(`my name is ${username}`);
}
sayName();

console.log('---null ,undefined');
console.log('默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量');
let numNull: number = 8;
console.log('tsconfig 设置 strictNullChecks=false 就可以赋值了！');
//numNull = undefined;
console.log(numNull);

console.log('---Never');
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
console.log('---Object');

function created(o: Object | null): void {
    console.log(o);
};
created('22')
created({ name: 12212 })

console.log('---类型断言');
let someValue: any = 'my name is xx';
console.log(someValue.length);
console.log((<string>someValue).length);
console.log((someValue as string).length);


























