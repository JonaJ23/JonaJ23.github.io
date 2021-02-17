// API-key: 7899101f669946d4bc57d2e21de4429e

document.addEventListener("DOMContentLoaded", function() {
  NewsAPI();
});

async function NewsAPI() {
  const url = 'HTTPS://newsapi.org/v2/everything?' +
          'q=Games&' +
          'from=2021-02-17&' +
          'sortBy=popularity&' +
          'apiKey=7899101f669946d4bc57d2e21de4429e';

const req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
}