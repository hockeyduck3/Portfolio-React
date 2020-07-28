const express = require('express');
const path = require('path');

const server = express();

const PORT = process.env.PORT || 3001;

server.get('*', (req, res) => res.send('Hello World!'))

server.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});