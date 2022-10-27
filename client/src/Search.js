import React from "react";

function Search({ handleSearch }) {

    return (
        <div>
            <input
                type="text"
                placeholder="Card name"
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search;