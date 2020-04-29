document.title = '单列模式';
class Singleton {
    private static singleton: Singleton;
    private constructor(public name: string) { }
    public static getInstance(name: string): Singleton {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton(name);
        }
        return Singleton.singleton;
    }
}
let s1 = Singleton.getInstance('xll');
let s2 = Singleton.getInstance('wen');
console.log(s1, s2);
console.log(s1 === s2);

