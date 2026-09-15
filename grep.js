//simple node.js version of grep

const fs = require('fs');
const path = require('path');

if (process.argv.length!==4){
  console.log(`Missing arguments!`);
  console.log(`Format: node ${path.basename(__filename)} <filename> <string>`);
  process.exit(1);
}

const lines = fs.readFileSync(process.argv[2],'utf8').split(`\n`);

for (const line of lines){
  if (line.includes(process.argv[3])){
    console.log(line);
  }
}
