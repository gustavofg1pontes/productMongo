const app = require('./app')
const Loaders = require('./loaders/index')


Loaders.start();
app.listen(3000, () => console.log('server running'))