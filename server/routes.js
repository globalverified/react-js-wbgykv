const express = require('express');
let router = express.Router();

const fs = require('fs'),
const url = require('url');

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


app.use(express.static(__dirname + '/public')); 

router.route('/bpm/start').get(checkSession, (req, res) => {
  console.log('pub/proxy/bpm/start called');
  res.send('pub/proxy/bpm/start called');
});

router.route('/adu-ms/get').get(checkSession, (req, res) => {
  console.log('api/proxy/adu-ms/get called');
  res.send('api/proxy/adu-ms/get called');
});

router
  .route('/save/:id')
  .get((req, res) => {
    //reads file Id and serves back as JSON
    res.json({ fileID: req.params.id });
  })
  .post((req, res) => {
    //writes contents of request body that is JSON to file named id.json
    var body = '';
    filePath = __dirname + '/id.json';
    req.on('data', function(data) {
        // body += req.body;
        body += data;
    });

    req.on('end', function (){
        fs.appendFile(filePath, body, function() {
            respond.end();
        });
    });
    res.send('new content updated successfully');
  });

module.exports = router;
