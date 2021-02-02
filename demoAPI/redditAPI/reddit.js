const searchForm = document.getElementById('search-form');
import reddit from './reddit-api'

const searchInput = document.getElementById('search-input');

const searchReddit = (searchTerm, searchLimit, sortBy) => {
    return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
    .then(response => response.json())
    .then(data => data.data.children.map(data => data.data));
};

searchForm.addEventListener('submit', event => {
    // Get search term by toggling on/off
    const searchTerm = searchInput.value;

    // Get limit
    const searchLimit = document.getElementById('limit');
    
    //Check input
    if (searchTerm === '') {
        // Show message
        alert('Please add a serach term')
    }

    // Clear input
    searchInput.value = "";

    //Search Reddit
    

    event.preventDefault();
});

// function showMessage(message, className) {
//     // Create div
//     const div = document.createElement('div');
//     // Add classes
//     div.className = `alert ${className}`;
//     // Add text
//     div.appendChild(document.createTextNode(message));
//     // Get parent container
//     const searchContainer = document.getElementById('search-container');
//     // Get search
//     const search = document.getElementById('search');

//     // Inseert message
//     searchContainer.insertBefore(div, search);

//     // Timeout alert
//     setTimeout(() => {document.querySelector('alert').remove()}, 1000);
// }