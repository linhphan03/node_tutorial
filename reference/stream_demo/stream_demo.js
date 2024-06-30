const fs = require("fs");
const path = require("path");

let readStream = fs.createReadStream(path.join(__dirname, "./read_file.txt"));

let writeStream = fs.createWriteStream(path.join(__dirname, "./write_file.txt"));

//Read files with streamsreceiver
readStream.on('data', chunk => {
    console.log("New chunk of data received");
    //console.log(`${chunk} <== new chunk of data\n\n`);

    writeStream.write(chunk)
})

