const express = require('express');
let router = express.Router();

const checkSession = (req, res, next) => {
  // check if req is having a session
  if (req.session) {
    res.send('Welcome this request has a session');
    next();
  } else {
    res.send('invalid session');
    res.redirect('/');
  }
};

router.use(checkSession);

router.route('/bpm/start').get(checkSession, (req, res) => {
  console.log('pub/proxy/bpm/start called');
  res.send('pub/proxy/bpm/start called');
});

router.route('/adu-ms/get').get(checkSession, (req, res) => {
  console.log('api/proxy/adu-ms/get called');
  res.send('api/proxy/adu-ms/get called');
});

router.route('/save/:id').post((req, res) => {
  console.log('api/proxy/save/' + req.params.id + 'called');
  res.send('api/proxy/save/' + req.params.id + 'called');
});

module.exports = router;
