//Научиться искать подстроку внутри строки.

//В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля.
// Пароль является надёжным, когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'.
// Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный»

let password = '123456789_';
let passwordMinLength = 4;
let passwordCondition1 = '-';
let passwordCondition2 = '_';

if (password.length >= passwordMinLength && (password.includes(passwordCondition1) || password.includes(passwordCondition2))) {
    console.log('Пароль надёжный');
} else {
    console.log('Пароль недостаточно надёжный');
}