import React from "react";
import {ReactComponent as Search} from "../../assets/search.svg";
import SearchInput from "./searchInput.js"

const SearchBar = ({Recipe}) => {
    return (
        <div>
            <Search />
            <SearchInput letter={Recipe.charAt()}/>
        </div>
    );
};

export default SearchBar;