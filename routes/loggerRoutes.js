
const router = require("express").Router();
const logger = require('./../logConfig')

router.get('/log', (req, res) => {

    logger.query({}, function(err, results) {
      if (err) {
        res.send(err);
    } else {
        res.send(results);
    }
    });
  
  })

  module.exports = router;