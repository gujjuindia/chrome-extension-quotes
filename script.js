fetch('https://quotes.rest/qod?language=en')
    .then(data => data.json())
    .then(response => {
        const jokeText = response.contents.quotes[0].quote;
        const GIElement = document.getElementById('GIElement');

        GIElement.innerHTML = jokeText;
    })