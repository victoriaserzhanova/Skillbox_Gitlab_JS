//Узнать, как преобразовывать строку в верхний/нижний регистр. Узнать, как извлекать произвольные куски из строки.

// В переменных name, surname написаны имя и фамилия человека.
//  При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок.
//   Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему.
//    Запишите результат в новые переменные и выведите их значения с помощью console.log. 
//    С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или 
//    «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.

let name = 'Ivan';
let surname = 'Petrov';

let capitilizeName = (name.substr(0,1)).toUpperCase();
let toLowerCaseName = (name.substr(1)).toLowerCase(); // initial string isn't modified
let modifiedName = capitilizeName + toLowerCaseName;

let capitilizeSurname = (surname.substr(0,1)).toUpperCase();;
let toLowerCaseSurname = (surname.substr(1)).toLowerCase();
let modifiedSurname = capitilizeSurname + toLowerCaseSurname;

console.log(modifiedName, modifiedSurname);

name === modifiedName && surname === modifiedSurname ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');