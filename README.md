# Should-I-Makeup
Compare makeup brand's price and ingredients. 

# Project Overview
## Project Name
Should I Makeup?

## Project Description
This will allow users to compare price, ingidients and ratings of various makeup products. Awnsering the question, Should I?

## API and Data Sample
https://makeup-api.herokuapp.com/

``` JSON
[{
  id: 114,
  brand: "covergirl",
  name: "CoverGirl Outlast Longwear Lipstick",
  price: "10.99",
  price_sign: null,
  currency: null,
  image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png",
  product_link: "https://well.ca/products/covergirl-outlast-longwear-lipstick_105803.html",
  website_link: "https://well.ca",
  description: "With CoverGirl Outlast Longwear Lipstick you get both moisture and colour! No need to choose!This long lasting lipstick doesn’t flake or crumble because it’s super-powered with moisture. It'll stays super fresh and super flexible all day, leaving you with a light weight but very pigmented lip look.",
  rating: null,
  category: "lipstick",
  product_type: "lipstick",
  tag_list: [ ],
  created_at: "2016-10-01T18:25:52.547Z",
  updated_at: "2017-12-27T01:50:37.669Z",
  product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/114.json",
  api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/ 000/000/114/original/open-uri20171223-4-fqgm96?1514062257",
}]
```
## Wireframes
[Wireframe](https://whimsical.com/should-i-makeup-7wViFUYb6k1dQjbrx27q1Z)

### MVP/PostMVP
#### MVP
- Axios call on makeup API
- Display results on page
- Displays product information (ingidients, price range, brand)
- Include a photo of product
- Clear previous results upon secondary search

#### PostMVP 
- Shows categories of products depending by tag selected
- Connects to shopping cart (website or amazon)
- incorporates users reviews?

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|Jun 7| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jun 7| Project Approval | Complete
|Jun 8 | Core Application Structure (HTML, CSS, etc.) | Complete
|Jun 9 - 10| Initial Clickable Model  | Complete
|Jun 11| MVP | Completed
|Jun 14| Presentations/Project Submission | Complete

## Priority Matrix
[Priority Matrix](https://user-images.githubusercontent.com/85313403/121119340-6e7e2400-c7e9-11eb-92ba-99bf293c39ee.png)
)

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial HTML setup | H | 3hrs| 1hr | 30min  |
| Axios set up | H | 3hrs| 4hrs | 3hrs |
| Render results | H | 3hrs| 12hrs | 3hr |
| Other JS | H | 3hrs| 6hrs | 3hrs |
| CSS for basic layout | M | 3hrs| 2hrs | 1hr|
| CSS for results | M | 4hrs| 7hrs | 3hrs |
| Image placement | M | 3hrs| 2hrs | 2.30hrs |
| Media query | H | 3hrs| 3hrs | 3hrs |
| General Research | H | 3hrs| 4hrs | 4hrs |
| Debugging | H | 3hrs| 3hrs | 3hrs |
| Total | H | 45hrs| 38hrs | 27hrs |

## Code Snippet  

   " const fetchData = async (brand, type) => {
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
    } "


## Change Log
Initialize My Flamingos Project 1  - "Should I Makeup?" - Timeframes will changed 
Able to finished MVPs and I updated wireframes