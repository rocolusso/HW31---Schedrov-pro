'use strict';

/*

У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка в консоль :

1 Используйте цикл for..of
2 Вывести общее кол-во элементов в консоль
3 Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль

*/
void function ()  {

    const ulTag = document.body.firstElementChild;
    const arrLi = Array.from(ulTag.children);
    const arrLiTexts = [];

    for (let node of arrLi) {
        console.log(node);
    }

    console.log(ulTag.childElementCount);

    for (let node of arrLi) {
        arrLiTexts.push(node.innerHTML);
    }

    console.log(arrLiTexts);

}();











