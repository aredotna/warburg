const express = require('express');
const router = express.Router();

const Arena = require('../lib/arena');

router.get('/', (req, res, next) => {
  const arena = new Arena;

  arena
    .channel(process.env.ARENA_CHANNEL_ID)
    .then(data =>
      res.render('index', data)
    );
});

module.exports = router;
