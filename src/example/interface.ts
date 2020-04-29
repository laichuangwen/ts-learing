document.title = 'interface';
console.log('工作原理');

function printLabel(labelObj: { label: string }): void {
    console.log(labelObj.label);
}
let myObj = {
    label: 'xiaolai', // 没有这个会报错
    value: 10,
}
console.log(printLabel(myObj));

//  重写

interface LabelObj {
    label: string;
}
function printLabel1(obj: LabelObj): void {
    console.log(obj.label);
}
// 赋值给一个另一个变量绕开编译器不会报错
let myObj1 = {
    label: 'xiooo',
    value: 20,
}
printLabel1(myObj1); // 这样写可以传其他值
printLabel1({
    label: 'xiaol', // 只能一个
    // value: 1,
});
// 可选 只读 额外
interface Style {
    readonly name: string;
    width?: (string | number);
    height?: (string | number);
    [propName: string]: any;
}
function printStyle(style: Style): void {
    console.log(style);
}
// 可选性
printStyle({
    name: 'xiaolai',
    width: '10px', //可选属性
    // height: 50, //可选属性
})
// 只读性
let myStyle: Style = {
    name: 'xiaolai',
}
console.log(myStyle.name);
// myStyle.name = 'dddd'; 只能读

printStyle({
    name: 'xiaolai',
    width: '10px', //可选属性
    height: 50, //可选属性
    bg: 'red',
})

// 函数类型
interface PersonSay {
    (name: string, age: number): string;
}
let say: PersonSay;
say = (name: string, age: number) => {
    return `名字：${name},年龄：${age} `;
}

// 可索引类型(字符串和数字)
interface IndexArray {
    [index: number]: (string | number | boolean),
}

let stringArr: IndexArray;
// stringArr = [2, 3];
stringArr = ['111', '222', 11, false];
console.log(stringArr[0]);
stringArr = {
    0: 'dddd',
    1: 'dddd',
}

interface IndexArrayForSrting {
    [index: string]: string;
}
let indexArray: IndexArrayForSrting;
indexArray = {
    name: 'dddd',
    age: 'dddd',
}

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}
// 错误
interface NotOkay {
    [x: number]: Animal,
}
interface NumberDictionary {
    [index: string]: number;
    num: number;
    // name: string; 错误
}
// 只读
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let tu: ReadonlyStringArray = ['sss', 'sss'];
// tu[1]= 'ddd';

// 实现接口
interface ClockInterface {
    currentTime: Date;
    name: string;
}
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(d: Date) {
        this.currentTime = d;
        this.name = 'dddd';
    }
    name: string;

}
