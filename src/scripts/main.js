'use strict';

// function sortList(list) {
//   const salaryElement = list.querySelector('[data-salary]');
// }

function parseSalary(salaryString) {
  return Number(salaryString);
}

function sortList(list) {
  const itemsArray = Array.from(list.children);

  itemsArray.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });

  itemsArray.forEach((item) => list.appendChild(item));
}

const myList = document.querySelector('ul');

sortList(myList);
