const quotes = [
    {
        quote : "Love is, above all else, the gift of oneself",
        author : "Jean Anouilh"
    },
    {
        quote : "Life is a long lesson in humility",
        author : "James M. Barrie"
    },
    {
        quote : "The reading of all good books is like a conversation with the finest men of past centuries",
        author : "Rene Descartes"
    },
    {
        quote : "Only in the agony of parting do we look into the depths of love",
        author : "George Eliot"
    },
    {
        quote : "Hope is a waking dream",
        author : "Aristotle"
    },
    {
        quote : "Let no one ever come to you without leaving better and happier",
        author : "Mother Teresa"
    },
    {
        quote : "Never love anyone who treats you like you're ordinary",
        author : "Oscar Wilde"
    },
    {
        quote : "we must not allow other people's limited perceptions to define us",
        author : "Virginia Satir"
    },
    {
        quote : "when you are totally at peace with yourself, nothing can shake you",
        author : "Deepam Chatterjee"
    },
    {
        quote : "it takes a great deal of courage to stand up to your enemies, but even more to stand up to your friends",
        author : "J.K Rowling"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
