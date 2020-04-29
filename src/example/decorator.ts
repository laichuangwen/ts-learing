import moment from 'moment';
document.title = '装饰器';
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上
// 类装饰
console.log(moment(new Date).format('YYYY-MM-DD hh:mm:ss'));
// 利用装饰器添加id属性
// 不利用装饰器工厂不能加参数
function addId(arg: any) {
    console.log('装饰器addId', arg);
    arg.prototype.id = '10000';
    arg.prototype.showId = () => {
        console.log('showId方法', arg.prototype.id);
    };
}
// 用装饰器工厂可以加参数
// 添加名称
function addName(name: string) {
    console.log(name);
    return function (target: any) {
        console.log('类装饰器工厂addName', target);
        target.prototype.name = name;
    }
}
// 重载构造函数利用extends
function classCompany(target: any) {
    return class extends target {
        constructor() {
            super();
            this.tel = '12222222';
        }
    }
}

@addId
@addName('ewen1')
@classCompany
class Company {
    constructor() {
        console.log('Company 内部constructor');
    }
}


let com: any = new Company();
console.log('addId装饰器得到的id:', com.id);
com.showId();
console.log('addName装饰器得到的name:', com.name);
console.log('classCompany装饰器得到的tel:', com.tel);

// 方法装饰器 属性装饰器
function setInfo(info: any) {
    return function (target: any, methodsName: string, descriptor: PropertyDescriptor) {
        console.log(target, methodsName, descriptor);
        Object.keys(info).forEach(key => {
            target[key] = info[key];
        })
        descriptor.value = () => {
            console.log('当前信息：', info);
        }
    }
}
// 属性装饰器
function format(s: string) {
    // YYYY-MM-DD hh:mm:ss
    return function (target: any, name: string) {
        console.log(target, name);
        target[name] = moment(target[name]).format('YYYY-MM-DD hh:mm:ss');
    }
}

class MacBook {
    @format('YYYY-MM-DD hh:mm:ss')
    public time = 'Mon Apr 27 2020 10:59:22 GMT+0800 (中国标准时间)';
    constructor() { }

    @setInfo({
        type: 'air',
        core: '2.4 GHz 四核Intel Core i5'
    })
    getInfo() {
        console.log('内部getInfo方法');
    }
    getTime() {
        return this.time;
    }

}
let macBook: any = new MacBook();

console.log(macBook.type);
console.log(macBook.core);
console.log(macBook.getInfo());
console.log('时间', macBook.time); // 并不能更改原来的
console.log('时间', macBook.getTime()); // 并不能更改原来的


