// TASK 1

const taskWay1 = document.getElementById('task-1');
const taskWay2 = document.querySelector('#task-1');

taskWay1.style.color = 'white';
taskWay1.style.backgroundColor = 'black';

taskWay2.style.color = 'white';
taskWay2.style.backgroundColor = 'black';

// TASK 2

const title1 = document.querySelector('title');
const headTitle2 = document.head;
const title2 = headTitle2.querySelector('title');

title1.textContent = 'Assignment - Solved!'
title2.textContent = 'Assignment - Solved!'

// TASK 3

const tagh1 = document.getElementsByTagName('h1');
tagh1[0].textContent = 'Assignment - Solved!';