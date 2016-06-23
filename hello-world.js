var fs = require ('fs');

function doubleWrite() {
  fs.readFile('./my-file.txt', readFileHandler);
}

function readFileHandler(err, data) {
  var text = data.toString();

  var doubleText = text + "\n" + text;

  fs.writeFile('./my-file.txt', doubleText, writeFileHandler);

  function writeFileHandler(err) {
    if (err) {
      console.error(err);
    return;
  }
  console.log("We wrote to the file, yay!");
  }
}

// fs.open("./my-file.txt", "r", function(err, fd) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//
//   fs.read(fd, function(err, bufferLength, ))
// });

// fs.readFile('./my-file.txt', function(err, data) {
//   var text = data.toString();
//   console.log(data.toString());
// });
