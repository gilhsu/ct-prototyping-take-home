// edit this to point to your app's server.js file
const app = require('./template/server.js')
const port = 3000;


app.listen(port, () => {
    console.log(`${app.locals.title} listening at http://localhost:${port}`)
  })