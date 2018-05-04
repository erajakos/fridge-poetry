const Router = require('koa-router');
const wordRepository = require('../repositories/word');

const router = new Router();
const BASE_URL = `/api/v1/words`;

router.get(`${BASE_URL}/all`, async (ctx) => {
  try {
    const words = await wordRepository.findAll();
    if (words.length) {
      ctx.body = {
        status: 'success',
        words: words
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'No words were found'
      };
    }
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.body = {
      status: 'error',
      message: 'Error occurred while fetching the words.'
    };
  }
});

module.exports = router;