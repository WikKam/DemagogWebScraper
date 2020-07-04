const express = require('express');
const app = express();
const port = process.env.PORT | 8080;
const cors = require('cors');
const members = require('./controllers/memberRouter');
const parties = require('./controllers/partyRouter');
const coalitions = require('./controllers/coalitionRouter');
app.use(cors());
app.use('/members',members);
app.use('/parties',parties);
app.use('/coalitions', coalitions);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.