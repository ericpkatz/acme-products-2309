const spanCount = document.querySelector('#spanCount');
const spanAverageCost = document.querySelector('#spanAverageCost');
const ul = document.querySelector('ul');

const products = [
  { name: 'foo', color: 'red', cost: 1},
  { name: 'bar', color: 'blue', cost: 3},
];

const names = ['foo', 'bar', 'bazz', 'quq', 'fizz', 'buzz'];
const colors = ['red', 'blue', 'green', 'yellow'];

function render(){
  spanCount.innerHTML = products.length;

  let sum = 0;
  products.forEach((product)=> {
    sum = sum + product.cost;
  });
  const average = sum / products.length;
  spanAverageCost.innerHTML = average.toFixed(2);

  const html = products.map((product)=> {
    return `
      <li>
        ${product.name} is ${product.color } and cost $${product.cost.toFixed(2)}
      </li>
    `;
  }).join('');

  ul.innerHTML = html;
}

render();

const interval = setInterval(()=> {
  const nameIndex = Math.floor(Math.random()*names.length);
  const name = names[nameIndex];
  const colorIndex = Math.floor(Math.random()*colors.length);
  const color = colors[colorIndex];
  const cost = Math.ceil(Math.random()*10);
  const randomProduct = {
    name: name,
    color: color,
    cost: cost
  };
  products.push(randomProduct);
  render();
  if(products.length === 15){
    clearInterval(interval);
  }
}, 1000)

