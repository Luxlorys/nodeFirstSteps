const URL = 'https://jsonplaceholder.typicode.com/posts';

const data = fetch(URL)
    .then(response => {
        return response.json();
    });

const renderedData = data.then(data => {
    return data.slice(0, 5);
})

module.exports = {
    renderedData,
}