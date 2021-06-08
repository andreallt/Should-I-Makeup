const fetchData = async (brand, product) => {
  const url =`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type${product}`
  try { 
    const response = await axios.get(url);
    const makeupSearch = response.data;
    console.log(makeupSearch);
    makeupCard(makeupSearch);
  } catch (error) {
    console.log(error.message);
  }}


function makeupCard(data) {
let productInfo = document.querySelector('#product')

let container = document.createElement('div');
container.style.border = 'solid gray 1px';

let photo = document.createElement ('img')
photo.setAttribute('src', data.api_featured_image);
photo.style.width = '500px';

let name = document.createElement('h2');
name.innerText = data.name;

let brand = document.createElement('h2');
brand.innerText = data.brand;

let description = document.createElement('p');
description.innerText = data.description;

let website = document.createElement('a');
website.innerText = data.website_link;

let price = document.createElement('p');
price.innerText = data.price;
price.style.display = 'inline';

container.append(photo, name, brand, description, website, price);
productInfo.appendChild(container)
}
 

function lookMakeup (event) {
  event.preventDefault();
  let userInput = document.querySelector('#look-makeup');
  let brand = userInput.value;
  let product = userInput.value;
  fetchData(brand, product);}

  const showCard = document.querySelector('#look-form');
  showCard.addEventListener('submit', lookMakeup);