console.log('Задача 1\n');
console.log(`В переменную password запишите строку с любым произвольным паролем. 
Проверьте надёжность пароля с помощью условного оператора if. Пароль является надёжным, 
когда в нём есть хотя бы четыре символа, один из которых — это дефис или нижнее подчёркивание. 
Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».`);

let password = '123456789';

    if (password.length > 4 && (password.indexOf('_') != -1  || password.indexOf('-') != -1) ) {
        console.log('Пароль надёжный');
    } else {
        console.log('Пароль недостаточно надёжный');
    }

    console.log('Задача 2\n');
    console.log(`В переменных userName, userSurname даны имя и фамилия пользователя. 
    При этом в строках беспорядок с большими и маленькими буквами, и нужно оформить строки единообразно. 
    Для этого первые буквы имени и фамилии приведите к верхнему регистру (большие буквы), а оставшиеся — к нижнему (маленькие буквы). 
    Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и console.log 
    выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того, 
    были ли исходные строки равны преобразованным.`); 
    
    let userName = 'Андрей';
    let userSurname = 'БезРуков';

    let firstUserName = userName.substring(0, 1).toUpperCase();
    let lastUserName = userName.substring(1).toLowerCase(); 

    let firstUserSurname = userSurname.substring(0, 1).toUpperCase();
    let lastUserSurname = userSurname.substring(1).toLowerCase();

    console.log(`${firstUserName}${lastUserName} ${firstUserSurname}${lastUserSurname}`);

    firstUserName === userName.substring(0, 1) && lastUserName === userName.substring(1) && firstUserSurname === userSurname.substring(0, 1) && lastUserSurname === userSurname.substring(1) ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');
    
    console.log('Задача 3\n');
    console.log(`В переменной number записано число. Необходимо с помощью console.log вывести сообщение, указывающее на чётность или нечётность числа.`); 

    let number = 8;
    let n = 8;
   if (number%n == n - 1) {
    console.log('Число не делится на ' + n);
   } else {
    console.log('Число делится на ' + n);
   }