'use strict';

let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    column = document.getElementsByClassName('column'),
    title = document.getElementById('title'),
    menuItemLi = document.createElement('li'),
    adv = document.querySelector('.adv'),
    promptForApple = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

document.body.style.background = "url('img/apple_true.jpg')";

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let yourOpinion = prompt('Ваше отношение к технике Apple?', '');
    promptForApple.textContent = yourOpinion;

