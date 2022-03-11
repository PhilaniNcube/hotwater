async function getProducts() {
  const products = await fetch('http://localhost:3000/api/products');

  return products;
}

export default getProducts;
