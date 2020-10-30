import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Catalog from "./Catalog";

describe("<Catalog />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <BrowserRouter>
                <Catalog />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});
