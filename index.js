import express from "express";

const PORT = 4001;
const app = express();

app.use(express.json());

const artists = [{
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
    console.log(req.params);
    let artist;
    artist = artists.find((artist   ) => {
        return artist.id === +req.params.id;
    })
    res.send(artist);
})

app.post('/artists', (req, res) => {
    console.log(req.body);
    res.send('post data');
})


app.listen(PORT, () => console.log(`Server is listening on ${PORT} port`));

// import express from "express";

// const PORT = 4001;
// const app = express();

// app.use(express.json());    

// app.post('/', (req, res) => {
//     // console.log(req.body);
//     res.status(200).json("Server is working");
// })

// app.listen(PORT, () => console.log(`Server is listening on ${PORT} port`)); 