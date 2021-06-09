
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
let photoInfo = document.querySelector('.product-image');
let productInfo = document.querySelector('.product-a');
// let text = document.querySelector('#intro');
// text.remove('p');

let photoContainer = document.createElement('div');
let container = document.createElement('div');

let photo = document.createElement ('img')
photo.setAttribute('src', data[0].image_link);
photo.setAttribute("class","pr-photo");


let name = document.createElement('h2');
name.innerText = data[0].name;
console.log(name);

let brandName = document.createElement('h3');
brandName.innerText = data[0].brand;
brandName.style.display = 'inline-box';

let price = document.createElement('h3');
price.innerText = `$ ${data[0].price}`;
price.style.display = 'inline-box';

let description = document.createElement('p');
description.innerText = data[0].description;
description.setAttribute("class","description")

let tags = document.createElement("p");
tags.innerText = data[0].tag_list;
tags.setAttribute("id","tags")



photoContainer.append(photo);
photoInfo.appendChild(photoContainer)

container.append( name, brandName,  price, tags, description,);
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