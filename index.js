const app = "I don't do much."


var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten(array, name){
  var arrayB = array.push(name);
  return arrayB;
}