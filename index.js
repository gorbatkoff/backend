import express from "express";

const PORT = 4001;
const app = express();

app.use(express.json());

let artists = [{
    id: 1,
    name: "Metallica"
},

{
    id: 2,
    name: "Iron Maiden"
},
{
    id: 3,
    name: 'Deep Purple'
}
];

app.get('/', (req, res) => {
    res.send("Hello, API")
})

app.get('/artists', (req, res) => {
    res.send(artists);
})

app.get('/artists/:id', (req, res) => {
    let artist = artists.find((artist  ) => {
        return artist.id === +req.params.id;
    })
    res.send(artist);
})

app.post('/artists', (req, res) => {
    const artist = {
        id: Date.now(),
        name: req.body.name
    };
    artists.push(artist);
    res.send(artist);
});

app.put('/artists/:id', (req, res) => { // changing something from array
    let artists = artists.find((artist  ) => {
        return artist.id === +req.params.id;
    });
    artist.name = req.body.name;
    res.sendStatus(200);
});

app.delete('/artists/:id', (req, res) => { // Deleting something from array of tasks or smth else
    artists = artists.filter((artist) => {
        return artist.id !== +req.params.id;
    })
    res.sendStatus(200);
})

app.listen(PORT, () => console.log(`Server is listening on ${PORT} port`));
