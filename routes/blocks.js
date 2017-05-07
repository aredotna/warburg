const express = require('express');
const router = express.Router();

const Arena = require('../lib/arena');

router.get('/:id', (req, res, next) => {
  const arena = new Arena;

  arena
    .block(req.params.id)
    .then(data =>
      res.render('show', data)
    )
    .catch(next);
});

module.exports = router;
