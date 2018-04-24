const Koa = require('koa');

const app = new Koa();
const PORT = process.env.PORT || 9000;

// start the server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
  
module.exports = server;