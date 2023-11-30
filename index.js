const spanCount = document.querySelector('#spanCount');
const spanAverageCost = document.querySelector('#spanAverageCost');
const ul = document.querySelector('ul');

const products = [
  { name: 'foo', color: 'red', cost: 1},
  { name: 'blue', color: 'blue', cost: 3},
];

spanCount.innerHTML = products.length;

let sum = 0;
products.forEach((product)=> {
  sum = sum + product.cost;
});
const average = sum / products.length;
spanAverageCost.innerHTML = average;

const html = products.map((product)=> {
  return `
    <li>
      ${product.name} is ${product.color } and cost ${product.cost}
    </li>
  `;
}).join('');

ul.innerHTML = html;

