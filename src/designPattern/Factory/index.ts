// 工厂模式 Shape Rectangle Square Circle ShapeFactory
document.title = '工厂模式';
interface Shape {
    draw(): void;
}

class Rectangle implements Shape {
    draw(): void {
        console.log('Rectangle draw ...');
    }
}
class Square implements Shape {
    draw(): void {
        console.log('Square draw ...');
    }
}
class Circle implements Shape {
    draw(): void {
        console.log('Circle draw ...');
    }
}

function shapeFactory(type?: string): Shape {
    if (type === 'Square') {
        return new Square();
    }
    if (type === 'Circle') {
        return new Circle();
    }
    // 默认是Rectangle
    return new Rectangle();
}

shapeFactory().draw();
shapeFactory('Square').draw();
shapeFactory('Circle').draw();