process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
  main(data);
});

function main(char) {
  let ascii = char.charCodeAt(0);
  if (ascii >= 65 && ascii <= 96)
    console.log(1);
  else if (ascii >= 97 && ascii <= 122)
    console.log(0);
  else
    console.log(-1);
}
