const searchForm = document.getElementById('search-form');

const searchInput = document.getElementById('search-input');

const searchReddit = (searchTerm, searchLimit, sortBy) => {
    return fetch(`https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
    .then(response => response.json())
    .then(data => data.data.children.map(data => data.data))
    .catch(err => console.log(err));
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
    searchReddit(searchTerm, searchLimit, "latest").then
    (results => {
        let output = '<div class="card-columns">';
        // Loop through posts
        results.forEach(post => {
            output  += `
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `;
        });
        output += '</div>';
        document.getElementById('results').innerHTML = output;
    })

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