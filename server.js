const express = require('express');

const app = express();

const PORT = 3300;

app.get('/', (req, res) =>{
    res.send('Server API Manajemen Film berjalan!');
});

app.listen(PORT, () => {
    console.log('Server aktif di http://localhost:${PORT}');
})