var express = require('express');
var router = express.Router();

const session = require('express-session');
var app = express();
app.use(
  session({
    secret: 'absdajfaldsjflasdj',
    resave: false,
    saveUninitialized: false,
  })
);

router.get('/', (req, res, next) => {
  // check if req is having a session
  if (req.session && req.session.headerText) {
    let homeText = req.session.headerText;
    res.render('index', { homeText });
  } else {
    req.session.headerText = 'Default Header Text';
  }
});

var Session;
const sessionmiddleware = (req, res, next) => {
  console.log(`TAMM sessionmiddleware`);
  // that only allows request to proceed if req has session
  if (req.session && (req.path == '/pub/proxy' || req.path == '/api/proxy')) {
    Session = req.session;
    console.log('session - ', Session);
    res.send('Welcome this request has a session');
    next();
  } else {
    res.send('invalid session');
    res.redirect('/');
  }
};

module.exports = router;
