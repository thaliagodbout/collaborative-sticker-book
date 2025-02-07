// import fs from 'fs';
// the require here includes the fs module
var fs = require('fs');
var files = fs.readdirSync('./images');

console.log("\nimages file names:");
files.forEach(file => {
    console.log(file);
  });