const express = require('express');
const router = express.Router();

const Arena = require('are.na');

router.get('/:id', (req, res, next) => {
  const arena = new Arena;

  arena
    .channel(req.params.id).get()
    .then(data =>
      res.render('index', data)
    )
    .catch(next);
});

module.exports = router;
