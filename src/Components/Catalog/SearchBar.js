import React from "react";
import "./SearchBar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SearchBar extends React.Component {
    render() {
        //search bar component handles filtering of displayed courses
        return (
            <form className="catalog-search rel">
                <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    name="search"
                    onChange={(e) =>
                        this.props.handleSearch(e, document.getElementById("search").value)
                    }
                />
                <button
                    className="b-blue"
                    type="submit"
                    onClick={(e) =>
                        this.props.handleSearch(e, document.getElementById("search").value)
                    }
                >
                    <FontAwesomeIcon className="fa fa-search" icon={faSearch} />
                </button>
            </form>
        );
    }
}
