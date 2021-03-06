try {
  require('fs').mkdirSync('./log')
} catch (e) {
  if (e.code !== 'EEXIST') {
    console.error('Could not set up log directory, error was: ', e)
    process.exit(1)
  }
}

var log4js = require('log4js')
log4js.configure('./config/log4js.json')

var log = log4js.getLogger('startup')
log.info('WebSocket Server start.')

var VueClient = require('./monitor-socket_api')
var vueClient = new VueClient()
vueClient.VueSetupListener()
