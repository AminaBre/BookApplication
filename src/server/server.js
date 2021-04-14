const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

//KOMMENTARER TIL PACKAGE.JSON:
      // start: kjører server + parcel samtidig 
      // server: kjører nodemon, som watcher directoryet server og restarter hvis det er noen endringer. 
      // parcel: watcher det som ligger i index.html og bygger ting på nytt 

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

//Vi server det som ligger under dist-filen. 
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

//Default-oppførsel: hvis den ikke finner .get eller .post definert over, så sender den index.html filen fra dist.
app.use((req, res, next) => {
    if (req.method != "GET"){
        return next();
    }
    res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
});

//Definerer at vi kjører på port 3000
app.listen(3000, () => {
    console.log("Start on http://localhost:3000");
});