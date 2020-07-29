const express = require('express');
const path = require('path');

const server = express();

const PORT = process.env.PORT || 3001;

server.use(express.static(path.join(__dirname, 'client/build')));

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

server.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});