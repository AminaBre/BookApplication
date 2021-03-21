import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";


function Application() {
    return <BrowserRouter>
        <Switch>
            <Route path={"/books"}>
            <h1>List alle bøker i butikken</h1>
        </Route>
        <Route path={"/create"}>
            <h1>Amina, Lag nye bøker</h1>
        </Route>
        <Route path={"/edit"}>
            <h1>Rediger eksisterende bok</h1>
        </Route>
        <Route path={"/"}>
            <h1>Kristiania bokbutikk hjemmeside</h1>
            <ul>
                <li><Link to={"/books"}>List alle bøker</Link></li>
                <li><Link to={"/create"}>Lag nye bøker</Link></li>
            </ul>
        </Route>
        <Route>
            Siden du ser etter eksisterer ikke
        </Route>
    </Switch>
    </BrowserRouter>;
}

ReactDOM.render(<Application />, document.getElementById("root"));