import httpService from './httpService';
import storageService from './storageService';

const API_URL = 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes';
const JOKE_LIST_KEY = 'dadJokes';
const LAST_JOKE_KEY = 'lastJoke';

async function getRandomJoke() {
  const lastJokeTime = new Date(storageService.load(LAST_JOKE_KEY));
  let joke;
  if (_isToday(lastJokeTime)) {
    const jokes = getJokes();
    joke = jokes[0];
  } else {
    joke = await httpService.get(`${API_URL}/random/jokes`);
    _addJoke(joke)
  }
  return joke
}

function getJokes() {
  let jokes = [];
  const localJokes = storageService.load(JOKE_LIST_KEY);
  if (localJokes) jokes = localJokes;
  return jokes;
}

function _addJoke(joke) {
  let localJokes = storageService.load(JOKE_LIST_KEY);
  if (!localJokes) localJokes = [];
  localJokes.unshift(joke);
  storageService.save(JOKE_LIST_KEY, localJokes);
  storageService.save(LAST_JOKE_KEY, Date.now());
}

function _isToday(someDate) {
  const today = new Date()
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}

export default {
  getRandomJoke,
  getJokes
}