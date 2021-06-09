
const fetchData = async (brand, type) => {
  const url =`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${type}`
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
photo.setAttribute('src', data[0].image_link);
photo.style.width = '500px';

let name = document.createElement('h2');
name.innerText = data[0].name;
console.log(name);

let brandName = document.createElement('h2');
brandName.innerText = data[0].brand;

let description = document.createElement('p');
description.innerText = data[0].description;

let website = document.createElement('a');
website.innerText = data[0].website_link;

let price = document.createElement('p');
price.innerText = data[0].price;
price.style.display = 'inline';

container.append(photo, name, brandName, description, website, price);
productInfo.appendChild(container)
}
 

function lookMakeup (event) {
  event.preventDefault();
  let brandInput = document.querySelector('#brand');
  let typeInput = document.querySelector('#makeup-type');
  let brand = brandInput.value;
  let typeMakeup = typeInput.value;
  fetchData(brand, typeMakeup);}

  const showCard = document.querySelector('#look-form');
  showCard.addEventListener('submit', lookMakeup);