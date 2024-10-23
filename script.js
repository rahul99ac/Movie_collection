// Get all elements with the class ".movie-detail" (where movie names are stored)
const movieList = document.querySelectorAll(".movie-detail");

// Initialize an empty array to store movie names for search suggestions
const suggestAvailableMovies = [];

// Loop through each movie detail element and push the movie name (converted to lowercase) into the array
movieList.forEach(i => {
    suggestAvailableMovies.push(i.textContent.toLowerCase());
});

// Get the search input field by its ID
const query = document.querySelector("#searchFilter");

// Add an event listener to the search input field that listens for any changes in user input
query.addEventListener("input", (e) => {

    // Get the current value of the search input and convert it to lowercase for case-insensitive matching
    const userSearchQuery = query.value.toLowerCase();

    // Clear any previously shown suggestions by removing all elements with the class "suggestion"
    const previousSuggestions = document.querySelectorAll(".suggestion");
    previousSuggestions.forEach(suggestion => suggestion.remove());

    // If the search input is empty, exit the function (don't display any suggestions)
    if (!userSearchQuery) {
        return;
    }

    // Find the first movie suggestion that includes the user's search query
    const suggestion = suggestAvailableMovies.find(movieSuggestion => {
        return movieSuggestion.includes(userSearchQuery); // Check if the movie name contains the search query
    });

    // If a matching suggestion is found
    if (suggestion) {
        // Create a new element to show the suggestion
        const suggestionElement = document.createElement("div");

        // Add a class "suggestion" to the new element (can be styled in CSS)
        suggestionElement.classList.add("suggestion");

        // Set the text content of the new suggestion element to the found movie name
        suggestionElement.textContent = suggestion;

        // Insert the suggestion element at the top of the ".container" element in the DOM
        const container = document.querySelector(".container");
        container.insertBefore(suggestionElement, container.firstChild);
    }
});
