const app = "I don't do much."


var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.slice(0, length -1);
}