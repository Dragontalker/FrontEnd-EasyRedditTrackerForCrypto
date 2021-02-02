const searchForm = document.getElementById('search-form');
const serachInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
    // Get search term by toggling on/off
    const searchTerm = searchInput.value;
    
    // Get sort, use special psudo-selector 
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    console.log(sortBy);
    event.preventDefault();
})