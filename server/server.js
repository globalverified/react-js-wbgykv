const express = require('express');
const session = require('express-session');
const app = express();
app.use(express.bodyParser());

const routes = require('./routes');
app.use(express.json());
app.use('/pub/proxy', routes);
app.use('/api/proxy', routes);

app.use(
  session({
    secret: 'absdajfaldsjflasdj',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  console.log('you are on root page');
});
