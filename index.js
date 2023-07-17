const { spawn } = require('child_process'),
  { readFileSync } = require('fs-extra'),
  http = require('http'),
  axios = require('axios'),
  semver = require('semver'),
  logger = require('./utils/log'),
  chalk = require('chalk')
var uptimelink = [
  'https://' +
    process.env.REPL_SLUG +
    '.' +
    process.env.REPL_OWNER +
    '.repl.co',
]
const Monitor = require('ping-monitor')
for (const now of uptimelink) {
  const monitor = new Monitor({
    website: '' + now,
    title:
      '\u2E19 \uD835\uDC0C\u20DEʀ  \uD835\uDC02\uD835\uDC07A͜͡\uD835\uDC0DD͜͡\u2E19',
    interval: 30,
    config: { intervalUnits: 'seconds' },
  })
  monitor.on('up', (_0x1e0fa6) =>
    console.log(
      chalk.bold.hex('#00FF00')(
        '[ SIWOO ] \u276F '
      ) + chalk.hex('#00FF00')('' + _0x1e0fa6.website)
    )
  )
  monitor.on('down', (_0x3419f9) =>
    console.log(
      chalk.bold.hex('#FF0000')('[ DOWN ] \u276F ') +
        chalk.hex('#FF0000')(_0x3419f9.website + ' ' + _0x3419f9.statusMessage)
    )
  )
  monitor.on('stop', (_0x14c3b8) =>
    console.log(
      chalk.bold.hex('#FF0000')('[ STOP ] \u276F ') +
        chalk.hex('#FF0000')('' + _0x14c3b8)
    )
  )
  monitor.on('error', (_0xbf5024) =>
    console.log(
      chalk.bold.hex('#FF0000')('[ ERROR ] \u276F ') +
        chalk.hex('#FF0000')('' + _0xbf5024)
    )
  )
}
const express = require('express'),
  app = express(),
  port = process.env.PORT || 5000
app.listen(port, () =>
  logger('Your app is listening a http://localhost:' + port, '[ ONLINE ]')
)
logger('Opened server site...', '[ Starting ]')
function startBot(_0x53007e) {
  _0x53007e ? logger(_0x53007e, '[ Starting ]') : ''
  const _0xc416e2 = spawn(
    'node',
    ['--trace-warnings', '--async-stack-traces', 'siwoo.js'],
    {
      cwd: __dirname,
      stdio: 'inherit',
      shell: true,
    }
  )
  _0xc416e2.on('close', (_0x2c1199) => {
    if (_0x2c1199 != 0 || (global.countRestart && global.countRestart < 5)) {
      startBot('Restarting...')
      global.countRestart += 1
      return
    } else {
      return
    }
  })
  _0xc416e2.on('error', function (_0x455fd1) {
    logger('An error occurred: ' + JSON.stringify(_0x455fd1), '[ Starting ]')
  })
}
axios
  .get('https://raw.githubusercontent.com/LeeTheSiwoo/zero/main/package.json')
  .then((_0x2412ce) => {})
startBot()
app.get('/', (_0x26e74c, _0xf18a6d) =>
  _0xf18a6d.sendFile(__dirname + '/index.html')
)
