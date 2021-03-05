let jokeAnswer = '';


//fetch jokes
async function fetchJokes() {
    const setup = document.getElementById('setup');
    const loadingText = document.getElementById('loading');
    const jokeContainer = document.getElementById('jokeContainer');
    
    try {
        const response = await fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general/derp');
        const joke = await response.json();
        setup.innerHTML = joke[0].setup;
        jokeAnswer = joke[0].punchline;

        loadingText.style.display = 'none';
        setup.style.display = 'block';
        jokeContainer.className = 'flex';

        setTimeout( () => showText(), 2000);

    } catch (error) {
        setup.innerHTML = 'Error Fetching Joke';
        jokeAnswer = 'Error Fetching Punchline';
    }
}

//show 'tell me' text message
function showText() {
    const textMsg = document.getElementById('revealText');
    textMsg.style.display = 'block';
}

//Show Answer button
const revealBtn = document.getElementById('reveal');
revealBtn.onclick = showAnswer;

function showAnswer() {
    const punchline = document.getElementById('punchline');
    punchline.innerHTML = jokeAnswer;
    punchline.style.display = 'block';
    revealBtn.style.display = 'none';
    refreshBtn.style.display = 'block';
}

//refresh button
const refreshBtn = document.getElementById('restart');
refreshBtn.onclick = pageRefresh;

function pageRefresh() {
    location.reload();
}

fetchJokes();