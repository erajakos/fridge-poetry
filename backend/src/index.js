const Koa = require('koa');

const app = new Koa();
const PORT = process.env.PORT || 1337;

// start the server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
  
module.exports = server;