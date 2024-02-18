const products = [{ id: 1, name: "Meat"}, { id: 2, name: "Chocolate"}, { id: 2, name: "Apple"}];

const list = document.getElementById('list');

for (let i = 0; i < products.length; i++) {
  const child = document.createElement('li');
  child.textContent = products[i].name;
  list.appendChild(child);
}
