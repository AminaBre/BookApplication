import {LoadingView} from "../src/client/LoadingView";
import TestRenderer from "react-test-renderer";

import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils"

//it er en måte å starte "setningen" på. Man kunne skrevet test i stedet for it med samme resultat. 
//øsnerk at testene skal matche et "snapsho"t. Ønsker at komponenten skal vise det samme som forrige gang.
describe("loading view", () => {
    it("show loading view", () => {
    const view = TestRenderer.create(<LoadingView/>);
    expect(view.toJSON()).toMatchSnapshot();
 });

    it("show loading view on dom", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        act(() => {
            ReactDOM.render(<LoadingView />, container
            )});

        expect(container.innerHTML).toMatchSnapshot();
    })
})