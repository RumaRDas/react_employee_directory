import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Search from './components/Search';
import Employees from "./components/Employees";
import Axios from 'axios';

import './App.css';

function App() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([]);
  const [filtemployees, setFiltemployees] = useState([]);
const url =`https://randomuser.me/api/?results=20& `;
  useEffect(() => {
    getEmployees();

  }, [])

  const getEmployees = async () => {
    try{const res = await Axios.get(url);
    //console.log(res.data);
    setEmployees(res.data.results);
    setFiltemployees(res.data.results);  
  } catch(err){
    throw new Error(err)
  }
  return employees;
};

  //for search option
  const onInputchange = (e) => {
   // console.log(e.target.value);
    setSearch(e.target.value);
  }
  const searchClick = () => {
 
    getEmployees();
  }

  return (
    <div className="App">

      <Header />
      <Search search={search} onInputchange={onInputchange} searchClick={searchClick} />
      <div className="container">
        <Employees employees={employees} />
      </div>
    </div>
  );
}

export default App;
