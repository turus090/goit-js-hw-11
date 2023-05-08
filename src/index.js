const form = document.querySelector('#search-form');

form.addEventListener('input', (e) => {
    console.log(e.target.value);
} ) 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clicked to search');
});