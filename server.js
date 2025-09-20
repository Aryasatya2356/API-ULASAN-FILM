const express = require('express');
const app = express();
const PORT = 3300;

app.get('/status', (req, res) =>{
    res.send('Server API Manajemen Film berjalan!');
});

let reviews = [
    {
        id:1,
        id_film:`2baf70d1−42bb−4437−b551−e5fed5a87abe`,
        user:`Sulung`,
        rating:`7/10`,
        comment:`Cukup Bagus`
    },

    {
         id: 2,
        id_film:`86e544fd-79de-4e04-be62-5be67d8dd92e`,
        user:`Sulung`,
        rating:`7/10`,
        comment:`Cukup Bagus`
    }

];

app.get('/reviews', (req,res) => {
    res.json(reviews);
})

app.get('/reviews/:id', (req,res) => {
    const reviewId = parseInt(req.params.id);
    const ulasan = reviews.find(r => r.id === reviewId);
    if (!ulasan) {
        return res.status(404).json({message: `Review tidak ditemukan`});
    }
    res.json(ulasan);
});

app.listen(PORT, () => {
    console.log(`Server aktif di http://localhost:${PORT}`);
})