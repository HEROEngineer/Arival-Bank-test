const express = require('express')
const path = require('path')
const { createLogger, transports } = require('winston');
const LokiTransport = require('winston-loki');

const PORT = process.env.PORT || 5001

const logger = createLogger({
  transports: [
    new LokiTransport({
      host: 'http://loki:3100',
      interval: 5,
      labels: {
        job: 'nodejs'
      }
    })
  ]
})

setInterval(() => {
  console.log("Send log");
  const level = getRandomArrayElement(['debug', 'info', 'warn', 'error']);
  const labels = getRandomArrayElement([{ env: 'dev' }, { env: 'prod' }]);
  const message = getRandomArrayElement(['This is just some log message...', 'Oh snap! Something went wrong.']);
  logger[level]({ message, labels })
}, 2000);

function getRandomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
