import { getImages } from "./fetchData";
  
const form = document.querySelector('#search-form');
const galleryRef = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more')
form.addEventListener('input', (e) => {
   localStorage.setItem('search',e.target.value);
   galleryRef.innerHTML = ''
   loadMoreBtn.style.display = 'none';
}) 



const genarateCards = (imgArr) => {
  imgArr.forEach(imgItem => {
    galleryRef.innerHTML += `
      <div class="photo-card">
      <img class="img"  src="${imgItem.previewURL}" alt="${imgItem.tags}" loading="lazy" />
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            <span>${imgItem.likes}</span>
          </p>
          <p class="info-item">
            <b>Views</b>
            <span>${imgItem.views}</span>
          </p>
          <p class="info-item">
            <b>Comments</b>
            <span>${imgItem.comments}</span>
          </p>
          <p class="info-item">
            <b>Downloads</b>
            <span>${imgItem.downloads}</span>
          </p>
        </div>
      </div>
    `
  });
} 

loadMoreBtn.addEventListener('click',async () =>{
  let currentPage = parseInt(localStorage.getItem('page'));
  currentPage += 1
  localStorage.setItem('page', currentPage)
  let searchText = localStorage.getItem("search")
  let imgs = await getImages(searchText, currentPage, 40)
  genarateCards(imgs.hits)
})

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    let searchText = localStorage.getItem("search")//e.target.elements.searchQuery.value
    localStorage.setItem('page', '1')
    loadMoreBtn.style.display = 'block'
    let imgs = await getImages(searchText, 1, 40)
      genarateCards(imgs.hits)
        /*.then((imgs)=>{
            console.log(imgs) 
        })*/

});
/*
collections
: 
2385
comments
: 
580
downloads
: 
656472
id
: 
736877
imageHeight
: 
1282
imageSize
: 
97150
imageWidth
: 
1920
largeImageURL
: 
"https://pixabay.com/get/g4ab7fb3de5763a807c80924c79fd0b81cc774dca9a552ff550afe453f498c817b8b355af34dd054223fa8f5734a0510e570e1a24d8d6f55ab82bea32e9a130f7_1280.jpg"
likes
: 
2879
pageURL
: 
"https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/"
previewHeight
: 
100
previewURL
: 
"https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg"
previewWidth
: 
150
tags
: 
"tree, cat, silhouette"
type
: 
"photo"
user
: 
"Bessi"
userImageURL
: 
"https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg"
user_id
: 
909086
views
: 
1280473
webformatHeight
: 
427
webformatURL
: 
"https://pixabay.com/get/g0c193320dcd46e00ea337798cd8b2cda7c1beaa63744d1302901f55f9a85e8cb6fa2c37eab1b7dd2ea07af4b5d7ea76a_640.jpg"
webformatWidth
: 
640
*/