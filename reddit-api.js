const searchReddit = (searchTerm, searchLimit, sortBy) => {
    return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
    .then(response => response.json())
    .then(data => data.data.children.map(data => data.data));
};

// Test
searchReddit("gamestop", 25, "latest");