import React, {useState, useEffect} from "react";
import { LoadingView } from "./LoadingView.jsx";

export function BookListPage(){
    const [books, setBooks] = useState();
    const [error, setError] = useState();

    async function loadBooks() {
        try {
            const res = await fetch("/api/books");
            if(!res.ok){
                throw new Error(`Noe gikk galt... ${res.url} : ${res.statusText}`);
            }

        const json = await res.json();
        setBooks(json);
    } catch (e) {
        setError(e);
    }
}
   

    useEffect(loadBooks, []);

    if(error) {
        return <div>Noe har gått galt...</div>;
    }

    if(!books) {
        return <LoadingView/>;
    }


    return <>
    <h1>Liste over alle bøker</h1>
    {books.map(({id, title,}) => (
        <li key={id}>{title}</li>
    ))}
    </>;
}

