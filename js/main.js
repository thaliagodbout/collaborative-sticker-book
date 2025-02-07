import fs from 'fs';

var fs = require('fs');
var files = fs.readdirSync('./images');

console.log("\nimages file names:");
files.forEach(file => {
    console.log(file);
  });