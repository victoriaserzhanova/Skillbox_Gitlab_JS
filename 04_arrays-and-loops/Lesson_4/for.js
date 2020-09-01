// for by index

// for ( let i = ; I < condition for break; i ++ to do after each iteration)

//бесконечный цикл. нет условия выхода
for (;;) {
    console.log('');
}
//цикл, который может завершиться на любой итерации с вероятностью 10%
for (; Math.random() >= 0.1;) {
    console.log('kgjvbkfg');
}

//выносим инициализатор за пределы цикла, а завершающую инструкцию в тело
let i = 10;
for(; i > 0;) {
    console.log('i = ' + i--);
}

//нет условия выхода
for (let i = 0; ; i++) {
    console.log(i);
}


