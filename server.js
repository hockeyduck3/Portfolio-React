const express = require('express');
const path = require('path');

const server = express();

// Serve the static files from the React server
server.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
server.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
server.listen(port);

console.log('App is listening on port ' + port);
