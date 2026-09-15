//simple node.js version of head

const fs = require('fs');
const path = require('path');

if (process.argv.length!==4){
  console.log(`Missing arguments!`);
  console.log(`Format: node ${path.basename(__filename)} <filename> <number>`);
  process.exit(1);
}

const lines = fs.readFileSync(process.argv[2],`utf8`).split(`\n`);

for (let i = 0; i < process.argv[3] && i < lines.length; i++){
  console.log(lines[i]);
}
