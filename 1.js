//1. Переменные, типы данных, ввод/вывод
//1
let name1 = prompt('Enter your name: ');
console.log(`Hello ${name1}`);

//2 
let age = +prompt('Enter your age:');
console.log(`Your age in ten years : ${age + 10}`);

//3 
let number1 = +prompt('Введите первое число: ');
let number2 = +prompt('Введите второе число: ');
console.log(number1 + number2);

//4
let num1 = +prompt('Введите первое число: ');
let num2 = +prompt('Введите второе число: ');
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//5 
let a = +prompt('Введите длину: ');
let b = +prompt('Введите ширину: ');
let S = a * b;
console.log(S);

//6 
let r = +prompt('Введите радиус: ');
console.log(3.14 * r ** 2);

//7 
let C = +prompt('Введите температуру в градусах Цельсия: ');
let F = C * (9 / 5) + 32;
console.log(F);

//8 
let seconds = +prompt('Введите количество секунд: ');
let hour = Math.floor(seconds / 3600);
let minute = Math.floor((seconds % 3600) / 60);
let s = seconds % 60;
console.log(`${hour} h. ${minute} min. ${s} sec.`);

//9 
let a1 = 9;
let b1 = 8;
let temp = a1;
a1 = b1;
b1 = temp;
console.log(a1);
console.log(b1);

//10 
let m = +prompt("Введите число: ");
let n1 = Number(m);
let n2 = parseFloat(m);
let n3 = String(m);
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

//2. Условия if / elif / else
//11 
let number = -8;
if(number > 0){
    console.log('Положительное число');
} else if (number < 0){
    console.log('Отрицательное число');
} else {
    console.log('Ноль');
}

//12 
let x1 = 6;
if(x1 % 2 == 0){
    console.log('Чётное число');
} else {
    console.log('Нечётное число');
}

//13
let x = 23;
let y = 34;
if(x > y){
    console.log(x);
} else {
    console.log(y);
}

//14 
let num_1 = 45;
let num_2 = 23;
let num_3 = 56;
if(num_1 > num_2 && num_1 > num_3){
    console.log(num_1);
} else if(num_2 > num_1 && num_2 > num_3){
    console.log(num_2);
} else {
    console.log(num_3);
} 

//15 
let z = 45;
if(z % 3 == 0 && z % 5 == 0){
    console.log('True');
} else {
    console.log('False');
}

//16 
let year = 2024;
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log('Високосный');
} else {
    console.log('Обычный');
}

//17 
let age_ = 34;
if(age_ < 12){
    console.log('Ребёнок');
} else if(age_ < 18){
    console.log('Подросток');
} else if(age_ < 60){
    console.log('Взрослый');
} else {
    console.log('Пенсионер');
}

//18 
let login = prompt('Enter your login:');
let password = prompt('Enter your password:');
if(login == 'admin' && password == '123456'){
    console.log('True');
} else {
    console.log('False');
}

//19
let month = 5; 
if(month == 12 || month == 1 || month == 2){
    console.log('Winter');
} else if(month == 3 || month == 4 || month == 5){
    console.log('Spring');
} else if(month == 6 || month == 7 || month == 8){
    console.log('Summer');
} else if(month == 9 || month == 10 || month == 11){
    console.log('Autumn');
} else {
    console.log('Invalid month');
}

//20 
let a2 = 12;
let b2 = 23;
let c2 = 34;
if(a2 + b2 > c2 && a2 + c2 > b2 && b2 + c2 > a2){
    console.log('Такой треугольник СУЩЕСТВУЕТ.');
} else {
    console.log('Такой треугольник НЕ СУЩЕСТВУЕТ.');
}

//3. Цикл for
//21 
for (let i = 1; i <= 100; i++){
    console.log(i);
}

//22 
for (let i = 2; i <= 100; i += 2){
    console.log(i);
}

//23 
for (let i = 100; i >=1; i--){
    console.log(i);
}

//24
let n = 20;
let sum = 0;
for (let i = 1; i <= n; i++){
    sum = sum + i;
}
console.log(sum);

//25
let n4 = 3;
let k = 1;
for (let i = 1; i <= n4; i++){
    k = k * i;
}
console.log(k);

//26
let t = 5; 
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${t} = ${i * t}`);
}

//27 
for (let i = 1; i <= 10; i++){ 
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//28 
let count = 0;
for (let i = 1; i <= 1000; i++){
    if(i % 3 === 0){
        count ++;
    }
}
console.log(count);

//29
let n5 = 8;
let summury = 0;
for (let i = 1; i <= n5; i += 2){
    summury = summury + i;
}
console.log(summury);

//30 
let numbers = 20;
for (let i = 1; i <= numbers; i++){
    console.log(i ** 2);
}