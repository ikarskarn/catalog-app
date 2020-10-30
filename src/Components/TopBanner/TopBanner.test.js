import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import TopBanner from "./TopBanner";

describe("<TopBanner />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <BrowserRouter>
                <TopBanner />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});
