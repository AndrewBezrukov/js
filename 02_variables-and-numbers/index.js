// Задание 1

let x1 = 8;
let y1 = 1;

let x2 = 5;
let y2 = 1;

console.log('Площадь треугольника', Math.abs(x2-x1)*Math.abs(y2-y1));

// Задание 2

let a = 13.123456789;
let b = 2.123;
let n = 5;

console.log(a.toFixed(n));
console.log(b.toFixed(n));
if(a.toFixed(n)-b.toFixed(n)>0) {
    console.log(a + ' Больше ' + b + ' С точностью ' + n);
} else {
    if(a.toFixed(n) == b.toFixed(n)) {
        console.log(a + ' Равно ' + b + ' С точностью ' + n); 
    } else {
        console.log(a + ' Меньше ' + b + ' С точностью ' + n);
    }
}