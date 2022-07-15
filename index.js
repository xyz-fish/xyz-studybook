const readline = require('readline')

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

r1.on('line', function (line) {
  console.log(line)
  if (line === 'close') {
    r1.close()
  }
})

r1.on('close', function () {
  console.log('再见')
  process.exit(0)
})
