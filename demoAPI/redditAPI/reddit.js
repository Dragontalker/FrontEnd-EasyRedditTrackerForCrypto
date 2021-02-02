const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
    // Get search term by toggling on/off
    const searchTerm = searchInput.value;

    // Get limit
    const searchLimit = document.getElementById('limit');
    
    //Check input
    if (searchTerm === '') {
        // Show message
        showMessage('Please add a serach term', 'alert-danger')
    }
    event.preventDefault();
});

function showMessage(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent container
    const searchContainer = document.getElementById('search-container');
    // Get search
    const search = document.getElementById('search');

    // Inseert message
    searchContainer.insertBefore(div, search);
}