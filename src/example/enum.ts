document.title = 'enum';
// 数字枚举
enum Animal1 {
    Dog,
    Cat,
}
console.log(Animal1);

// 字符串枚举
enum Status {
    Success = '200',
    Error = '500',
}
console.log(Status);


// 异构枚举，就是混合枚举（数字和字符串）
// 
enum Status1 {
    name = 'Status',
    Success = 200,
    Error = 500,
}
console.log(Status1);

// 计算
// 计算 ，会从0开始
enum E {
    X,
    Y
}
console.log(E);
// 从100开始
enum E1 {
    X = 100,
    Y
}
console.log(E1);

// 反射，从打印出的枚举就可以知道了

// const 
const enum B {
    X = 1,
}
console.log(B.X); //实际上打包结果只有1
