const Koa = require('koa');
const cors = require('koa-cors');
const wordRoutes = require('./routes/word');

const app = new Koa();
const PORT = process.env.PORT || 9000;

app.use(cors({
  origin: '*'
}));

app.use(wordRoutes.routes());

// start the server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
  
module.exports = server;