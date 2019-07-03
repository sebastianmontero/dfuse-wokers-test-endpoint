const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/', (req, res) => {
    console.log('Headers: ', req.headers);
    console.log('Body: ', req.body);
    const { trace: { matchingActions } } = req.body;
    console.log('Matching Actions: ', matchingActions);
    const { dbOps } = matchingActions[0];
    console.log('Db Ops: ', dbOps);
    res.send('Processed data ok!');
});

app.listen(port, () => console.log(`Dfuse Test endpoint listening on port: ${port}`));