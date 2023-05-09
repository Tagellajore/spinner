const symbols = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ']

symbols.forEach(function(symbol, index) {
  setTimeout(function() {
    process.stdout.write(symbol);
  }, (index + 1) * 200);
})

setTimeout(() => {
  console.log('')
}, 1000)