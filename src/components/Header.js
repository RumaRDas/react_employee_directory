import React from 'react';

const Header = (props) => {
    const {search, onInputChange,searchClick} = props;
    return (
        <div>
        <div className="jumbotron">
        <h1 className="display-2">
            <i className="material-icons brand-icon">supervised_user_circle</i>
  Employee Directory</h1>
  <h4>Click on carrots to filter by heading or use the search box to narrow your results</h4>
    </div>
    <hr></hr>
        </div>
    )
}

export default Header;