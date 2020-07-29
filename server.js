const express = require('express');
const path = require('path');

const server = express();

const PORT = process.env.PORT || 3001;

server.use(express.urlencoded({ extended: true }));
server.use(express.json);

if (process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build'));
}

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

server.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});