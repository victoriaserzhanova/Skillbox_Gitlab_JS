"use strict";
// Напишите функцию, фильтрующую массив объектов по значению свойства.
//  Массив, название свойства и нужное значение должны передаваться в качестве аргументов.
let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

function filterAllItemsByPropertyName(objects, propertyName, propertyValue) {
	let results = objects.filter(item => item[propertyName] == propertyValue );
	console.log(results);
}

filterAllItemsByPropertyName(objects,'surname','Иванов');

// export default {filterAllItemsByPropertyName};
