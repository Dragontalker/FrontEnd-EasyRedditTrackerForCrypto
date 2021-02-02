const searchReddit = async (searchTerm, searchLimit, sortBy) => {
    await fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
    .then(response => response.json())
    .then(data => console.log(data));
};

// Test
searchReddit("gamestop", 25, "latest");