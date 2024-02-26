// const myArray = ['apple', 'banana', 'cranberry', 'orange'];

// myArray.forEach(item => {
//   console.log(item);
// });

const products = [
  {
    title: 'product 1',
    price: 100,
    description: 'product 1 description',
    category: "electronics",
    image: "https://picsum.photos/200/150",
  },

  {
    title: 'product 2',
    price: 59.99,
    description: 'product 2 description',
    category: "furniture",
    image: "https://picsum.photos/200/150",
  },

  {
    title: 'product 3',
    price: 23.75,
    description: 'product 3 description',
    category: "electronics",
    image: "https://picsum.photos/200/150",
  }
];

// products.forEach(product => {
//   console.log(product);
// });
products.forEach(product => {
  console.log(`Title: ${product.title} | Price: ${product.price}`);
});

const createCard = (product) => {
  return `
    <div class="card">
      <h4>${product.title}</h4>
      <h2>${product.description}</h2>
      <img src="${product.image}" alt="">
      <p>Price: £${product.price}</p>
      <p>Category: ${product.category}</p>
    </div>
  `;
};


const productContainer = document.querySelector('.row');

// products.forEach(product => {
//   productContainer.innerHTML += createCard(product);
// });


const filteredProducts = products.filter(product => product.category == "electronics");{}

console.log(filteredProducts);

filteredProducts.forEach(product => {
  productContainer.innerHTML += createCard(product);
});






