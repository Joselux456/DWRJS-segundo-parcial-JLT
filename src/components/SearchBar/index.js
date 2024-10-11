import React from "react";
import {ReactComponent as Search} from "../../assets/search.svg";

const SearchBar = () => {
    return (
        <div>
            <Search />
            <input type="text" placeholder="Search..."></input>
        </div>
    );
};

export default SearchBar;