import React from 'react'
import "./style.css";

const Search =() => {

        return (
            <div className="search-back">
            <div className="input-group w-50 mx-auto">
            <input type="text" className="form-control" placeholder="Search by Name..."  />
            <div className="input-group-append">
              <button className="btn btn-dark">Search</button>
            </div>
        </div>
            </div>
        )

}

export default Search;
