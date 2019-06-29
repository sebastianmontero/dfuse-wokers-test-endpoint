const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    const { trace: { matchingActions } } = req.body;
    console.log(matchingActions);
    res.send('Processed data ok!');
});

app.listen(port, () => console.log(`Dfuse Test endpoint listening on port: ${port}`));