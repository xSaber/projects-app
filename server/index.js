const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info(`Listening on port ${port}`);
});
