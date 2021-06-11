const makeupBrands = document.querySelector('.brands');
const products = document.querySelector('.products');
const tags = document.querySelector('.tags');
const pricing = document.querySelector('.price');
const compareOptions = document.querySelector('.options');



const fetchData = async (brand, type) => {
  let removeInfo = document.querySelector('.product-a');
  removeInfo.childNodes.forEach((childNode) => {
    childNode.remove();
  });
  let removePhoto = document.querySelector('.product-image');
  removePhoto.childNodes.forEach((childNode) => {
    childNode.remove();
  });
  const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${type}`
  try {
    const response = await axios.get(url);
    const makeupSearch = response.data;
    makeupCard(makeupSearch);
  } catch (error) {
    console.log(error.message);
  }
}


// function optionCards(data) {
//   let optOne = document.querySelector('.opt1');
//   let optTwo = document.querySelector('.opt2');

//   let containerOne = document.createElement('div');
//   let containerTwo = document.createElement('div');

//   let photoOne = document.createElement('img')
//   photoOne.setAttribute('src', data[''].image_link);
//   photoOne.setAttribute("class", "photo-one");
//   console.log(data);
//   let photoTwo = document.createElement('img')
//   photoTwo.setAttribute('src', data[''].image_link);
//   photoTwo.setAttribute("class", "photo-two");

//   containerOne.append(photoOne);
//   optOne.appendChild(containerOne)

//   containerTwo.append(photoTwo);
//   optTwo.appendChild(containerTwo)
// }


function makeupCard(data) {

  let photoInfo = document.querySelector('.product-image');
  let productInfo = document.querySelector('.product-a');
  let form = document.querySelector("#look-form");
  form.setAttribute("class", "move-form");
  let photoContainer = document.createElement('div');
  let container = document.createElement('div');

  let photo = document.createElement('img')
  photo.src = data[0].image_link;
  photo.setAttribute("class", "pr-photo");
  const photoDefault = () => {
    photo.src = "https://c.stocksy.com/a/AMd200/z9/627946.jpg";
  }
  photo.onerror = photoDefault; 

  let name = document.createElement('h2');
  name.innerText = data[0].name;

  let brandName = document.createElement('h3');
  brandName.innerText = data[0].brand;
  brandName.style.display = 'inline-box';

  let price = document.createElement('h3');
  price.innerText = `$ ${data[0].price}`;
  price.style.display = 'inline-box';

  let description = document.createElement('p');
  description.innerText = data[0].description;
  description.setAttribute("class", "description")

  let tags = document.createElement("p");
  tags.innerText = data[0].tag_list;
  tags.setAttribute("id", "tags")


  photoContainer.append(photo);
  photoInfo.appendChild(photoContainer)

  container.append(name, brandName, price, tags, description,);
  productInfo.appendChild(container)
}

function lookMakeup(event) {
  event.preventDefault();
  let brandInput = document.querySelector('#brand');
  let typeInput = document.querySelector('#makeup-type');
  let brand = brandInput.value;
  let typeMakeup = typeInput.value;
  fetchData(brand, typeMakeup);
  // compareByBrand();
}



function logoMove() {
  let main = document.querySelector('#big-logo');
  main.remove();

  let intro = document.querySelector('#intro');
  intro.remove();

  let mainSide = document.querySelector('#small-logo');
  let logo = document.createElement('h2');
  logo.innerText = `Should I Makeup?`;
  mainSide.appendChild(logo);
}

async function compareByBrand() {
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?`
  try {
    const response = await axios.get(url);
    let i = [];
    const makeupOptions = response.data[i].brand;
    console.log(makeupOptions);
  } catch (error) {
    console.log(error.message);
  }
}
compareByBrand();

const showCard = document.querySelector('#look-form');
showCard.addEventListener('submit', lookMakeup);
showCard.addEventListener('submit', logoMove, { once: true });



