// Define an array of quotes and their authors
const quotes = [
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    }
    // Add more quotes as needed
];

// Function to get a random quote from the array
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the displayed quote and author
function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById("quote-text").textContent = quote.text;
    document.getElementById("quote-author").textContent = "— " + quote.author;
}

// Event listener for the "New Quote" button
document.getElementById("new-quote-btn").addEventListener("click", displayQuote);

// Display an initial quote when the page loads
displayQuote();
