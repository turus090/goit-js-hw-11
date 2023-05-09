import { getImages } from "./fetchData";
const form = document.querySelector('#search-form');

form.addEventListener('input', (e) => {
    console.log(e.target.value);
} ) 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchText = e.target.elements.searchQuery.value
    console.log(searchText)
    getImages(searchText, 1, 40)
        .then((imgs)=>{
            console.log(imgs)
        })

});