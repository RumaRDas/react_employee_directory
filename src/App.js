import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Search from './components/Search';
import Employees from "./components/Employees";
import Axios from 'axios';

import './App.css';

function App() {
  const [search, setSearch] = useState("name");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
 getEmployees();
  }, [])

  const getEmployees = async () => {
    const res = await Axios.get(`https://randomuser.me/api/?results=20`);
    //console.log(res.data);
    setEmployees(res.data.results);
  };

  //for search option
  const onInputchange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  // const searchClick = () =>{
  //   getEmployees();
  // }

  return (
    <div className="App">

      <Header />
      <Search search={search} onInputchange={onInputchange} />
      <div className="container">
      <Employees employees={employees} />
      </div>
    </div>
  );
}

export default App;
