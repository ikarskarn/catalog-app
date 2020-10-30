import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddCourseForm from "./AddCourseForm";

describe("<AddCourseForm />", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(
            <BrowserRouter>
                <AddCourseForm />
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});
