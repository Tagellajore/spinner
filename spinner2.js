const spinnerChars = ['|', '/', '-', '\\','|'];
const rotations = 2;

let delay = 100;

for(let rotation = 0; rotation < rotations; rotation++) {
  for (const char of spinnerChars) {
    delay = delay + 300;
    setTimeout(() => {
     process.stdout.write(`\r${char}   `);
    }, delay)
  }
}


setTimeout(() => {
  process.stdout.write(`\n`);
}, delay)
