const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000 ;

const morgan = require('morgan')
const app = express();
app.use(bodyParser.json())
app.use(cors());
app.use(morgan('dev'));

app.use('/api', require('./routers/user.router'));
app.use('/api', require('./routers/entreprise.router'));

app.use('/api', (req, res, next) => {
    res.send('Hello world !');
});

app.listen(port , () => {
    console.log('Application is running on port '+ port);
});

