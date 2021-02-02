const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
    // Get search term by toggling on/off
    const searchTerm = searchInput.value;
    
    //Check input
    if (searchTerm === '') {
        // Show message
        alert('Please add a search')
    }
    event.preventDefault();
})