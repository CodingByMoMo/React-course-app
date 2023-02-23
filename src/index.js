import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 20402;
app.listen(PORT);