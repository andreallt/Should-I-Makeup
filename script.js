const fetchData = async (brand) => {
  const url =`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
  // assign a responce object to an awaited axios.
  try { 
    const response = await axios.get(url);
    const makeupSearch = response.data;
    console.log(makeupSearch)
  } catch (error) {
    console.log(error.message);
  }}

 fetchData('covergirl');

 function makeupData(data) {
  //clear out data to ad new:
  // removeCountry();
 // Add data 

countryData.appendChild(container)
}
 
