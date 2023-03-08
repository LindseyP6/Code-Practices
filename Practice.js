let userName = 'Lindsey'
let userQuestion = 'Will I ever be able to code?'
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ''

userName ? console.log(`Hello, ${userName}!! Your question is: '${userQuestion}'`): console.log('Hello!');

if (randomNumber === 0) {
  console.log('It is certain')
} else if (randomNumber === 1) {
  console.log('It is decidedly so')
} else if (randomNumber === 2) {
  console.log('Reply hazy try again')
} else if (randomNumber === 3) {
  console.log('Cannot predict now')
} else if (randomNumber === 4) {
  console.log('Do not count on it')
} else if (randomNumber === 5) {
  console.log('My sources say no')
} else if (randomNumber === 6) {
  console.log('Outlook not so good')
} else if (randomNumber === 7) {
  console.log('Signs point to yes')
} else if (randomNumber === 8) {
  console.log('Try again tomorrow!')
} else {
  console.log ('Magic 8 Ball Out For A Smoke.')
}