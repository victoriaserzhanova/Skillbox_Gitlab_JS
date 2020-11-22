"use strict";
// Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список.
// В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.

let totalList = ['mail@yandex.ru','bird@gmail.ru','cmail@yandex.ru','mail@gmail.ru','bmail@yandex.ru','key@gmail.ru','amail@yandex.ru'];
let blackList = ['mail@yandex.ru','cmail@yandex.ru','bmail@yandex.ru','amail@yandex.ru'];

function sortUniqueEmail (totalList, blackList){
    let finalSortedList = [];

    for (let email of totalList){
        if (blackList.includes(email)) continue;
        finalSortedList.push(email);    
    } 
    return finalSortedList;
}

export default{sortUniqueEmail};