document.title = 'generic-programming';
// helloworld
// 不实用范型使用任何类型用any
function returnMe(arg: any): any {
    return arg;
}
console.log(returnMe(22));
console.log(returnMe('ewen'));
console.log(returnMe([1, 2, '333']));

// 用泛型代替
function returnMeT<T>(arg: T): T {
    return arg;
}
console.log(returnMeT(22));
console.log(returnMeT('ewen'));
console.log(returnMeT([1, 2, '333']));

// 泛型变量 单个和数组
function returnMeT1<T>(arg: T): T {
    // console.log(arg.length); //报错
    return arg;
}
function returnMeT2<T>(arg: T[]): T[] {
    console.log(arg.length); // 报错
    return arg;
}
console.log(returnMeT2([2]));
// 或者
function returnMeT3<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // 报错
    return arg;
}
console.log(returnMeT3([2]));

// 范型类型
// 可以用其他随便的名字
function returnMeT4<U>(arg: U): U {
    return arg;
}
console.log(returnMeT4(2222));

// 范型接口
interface Me {
    <T>(arg: T): T;
}
function showMe<T>(arg: T): T {
    return arg;
}
let me: Me = showMe;
console.log(me('dd'));

// 范型类
class A<T> {
    constructor(public name: T) {
    }
    me(arg: T): T {
        return arg;
    }
}
let a = new A(0);
console.log(a);
// console.log(a.me('dddd')); // 报错
console.log(a.me(1));

let a1 = new A('eeee');
console.log(a1);
console.log(a1.me('www')); // 报错
// console.log(a1.me(1)); // 报错

// 范型约束

interface Info {
    name: string;
}

function userInfo<T extends Info>(arg: T): T {
    return arg;
}
console.log(userInfo({ name: 'sss', age: 18 }));

// 高级用法 

