console.log('\n Задание №1');
console.log('__________ \n');
console.log('Цель: Научиться совместно применять переменные, математические операторы и функции объекта Math.\n');
console.log('Что нужно сделать: Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка; x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log. Напомним, что площадь прямоугольника — это произведение ширины и высоты. \n');

console.log('Решение:');
console.log('________ \n');

let x1 = 8;
let y1 = 1;

let x2 = 5;
let y2 = 1;

console.log('Площадь треугольника равна:', Math.abs(x2-x1)*Math.abs(y2-y1));

console.log('\n Задание №2');
console.log('   __________ \n');
console.log('Цель: Научиться округлять и точно сравнивать дробные части чисел.\n');
console.log('Что нужно сделать: Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log. \n');

console.log('Решение:');
console.log('________ \n');

let a = 13.890123;
let b = 2.891564;
let n = 2;
let fractionA = Math.abs(Math.trunc(((a - Math.trunc(a)) * Math.pow(10, n))));
let fractionB = Math.abs(Math.trunc(((b - Math.trunc(b)) * Math.pow(10, n))));

console.log('Дробная часть числа А:', fractionA);
console.log('Дробная часть числа B:', fractionB);

if(fractionA > fractionB) {
    console.log('Дробная часть числа а больше дробной части числа б');
} else {
    if(fractionA < fractionB) {
        console.log('Дробная часть числа а меньше дробной части числа б');
    } else {
        console.log('Дробная часть числа а равна дробной части числа б');
    }
}



let s = -3;
let m = -4;

function getRandomInt(s, m) {
    min = Math.ceil(s);
    max = Math.floor(m);
     if(min > max) {
        return Math.floor(Math.random() * (min - max)) + max;
     } else {
        return Math.floor(Math.random() * (max - min)) + min;
     }
  }

 let pizda = getRandomInt(s, m)
 let hui = getRandomInt(s, m)

 console.log(pizda, hui); 
 
 if(pizda > hui) {
    console.log('Пизда больше хуя');
} else {
    if(pizda < hui) {
        console.log('Пизда меньше хуя');
    } else {
        console.log('Пизда в самый раз для хуя');
    }
}
