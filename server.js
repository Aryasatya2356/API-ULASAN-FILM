const express = require('express');
const app = express();
const PORT = 3300;

app.use(express.json());

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

app.get('/status', (req, res) =>{
    res.send('Server API Manajemen Film berjalan!');
});

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

app.post('/reviews', (req, res) => {
    const {id_film, user, rating, comment} = req.body;

    if(!id_film||!user||!rating||!comment){
        return res.status(400).json({message: 'semua field(id_film, user, rating, comment) harus diisi'});
    }

    const newId = reviews.length > 0 ? reviews[reviews.length - 1].id + 1: 1;

    const newReview = { id: newId, id_film, user, rating, comment};

    reviews.push(newReview);
    res.status(201).json(newReview);
});

app.delete(`/reviews/:id`, (req, res) =>{
    const reviewId=parseInt(req.params.id);
    const cari = reviews.find(r => r.id === reviewId);

    if(!cari){
        return res.status(404).json({message: `Review Tidak di temukan`});
    }

    reviews.splice(cari, 1);
    res.status(204).send();

});

app.put(`/reviews/:id`, (req, res) => {
    const reviewId = parseInt(req.params.id);
    const reviewIndex = reviews.findIndex(r => r.id === reviewId);

    if (reviewIndex === -1) {
        return res.status(404).json({message:  'Review not Found'});
    }
    const {id_film, user, rating, comment} = req.body;

    if (!id_film||!user||!rating||!comment){
        return res.status(400).json ({message: 'field tidak terisi'});
    }
    const updatedReview = {id:reviewId, id_film, user, rating, comment};

    reviews[reviewIndex] = updatedReview;
    
    res.status(201).json(updatedReview);
});

app.listen(PORT, () => {
    console.log(`Server aktif di http://localhost:${PORT}`);
})
