const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

const app = express();

const books = [{
    id: 1,
    title: "Hallois",
    author: "Amina Brenneng",
    year: "1996"
},
{
    id: 2,
    title: "Sving for viderekommende",
    author: "Elias Nordheim",
    year: "2021"
}

];

app.use(bodyparser.json());
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.get("/api/books", (req, res) => {
    res.json(books);
})

app.post("/api/books", (req, res) => {
    const {title, author, year} = req.body;
    books.push(
        {title, author, year, id: books.length+1})
        res.status(201);
        res.end();
});

app.use((req, res, next) => {
    if (req.method != "GET"){
        return next();
    }
    res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

app.listen(3000, () => {
    console.log("Start on http://localhost:3000");
});