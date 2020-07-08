import React from 'react'


const Search =(props) => {

        return (
            <div className="search-back">
            <div className="input-group w-50 mx-auto">
            <input type="text" 
            className="form-control"
             placeholder="Search Employee by name..."
             value={props.search}  
             onChange={props.onInputchange}/>
            <div className="input-group-append">
              <button className="btn btn-dark"  onClick={props.searchClick}>Search</button>
            </div>
        </div>
            </div>
        )

}

export default Search;
