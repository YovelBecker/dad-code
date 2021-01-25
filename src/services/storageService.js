export default {
  save,
  load,
  clear
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function load(key) {
  return JSON.parse(localStorage.getItem(key));
}

function clear(){
  localStorage.clear();
}