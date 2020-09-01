// действие по счетчику
for (let i = 0; i < 10; ++i){
    console.log(i);
}


//  заполнение массива по счетчику
let a = [];
for (let i = 0; i < 10; ++i){
    a.push(i * i);
}

//  заполнение массива на основе значений другого массива

let b = [];
for (let pow2 of a) {
    b.push(pow2 / 2 );
}

//  заполнение пустого массива на основе данных из файла(длина данных неизвестна)

let lines = [];
let next;
while (next = file.nextLine()) {
    lines.push(next);
}

//  обработка значений массива
for (let line of lines) {
    console.log('Длина строки:', line.length);
}

//  обработка индексов массива
for (let number in lines) {
    console.log(`Длина строки ${number}: ${lines[number].length}`);
}

//  обработка значений или индексов массива в обратном порядке
let aReversed = [];
for (let i = a.length - 1; i >= 0; --i) {
    aReversed.push(a[i]);
}

// сложная логика выхода из цикла
let currentAttempt = 0;
while(currentAttempt++ < 1000) {
    if (crayfishWhistles()) break;
}

// обработка нескольких массивов одинаковой длины
for (let i in a) {
    console.log(a[i] + aReversed[i]);
}

for (let i = 0; i < a.length; ++i) {
    console.log(a[i] + aReversed[i]);
}

// цикл со счетчиком и сложной логикой изменения значения счетчика
for (let x = 0; x < 100; x += Math.round(Math.random() * 5 )) {
    console.log(x);
}