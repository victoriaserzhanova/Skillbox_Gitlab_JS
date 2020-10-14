"use strict";
// Напишите функцию, фильтрующую массив объектов по значению свойства.
//  Массив, название свойства и нужное значение должны передаваться в качестве аргументов.
let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

function findValueByPropertyName (objects, propertyName, propertyValue) {
    let result = objects.find(item => item[propertyName] == propertyValue );
    console.log(result);
}

findValueByPropertyName(objects,'surname','Иванов');

export default {findValueByPropertyName};