import React  from 'react';
import Header from './components/header/Header';
import Search from './components/Search';
import Employees from "./components/Employees";
import Axios from 'axios';

import './App.css';

 function App() {
//   const [search, setSearch] = useState("");
//   const [employees, setEmployees] = useState([]);
  
//   useEffect(() => {
//    getEmployees();
//   }, [])

// const getEmployees = async () => {
//   const result = await Axios.get();
//   setEmployees(result.data.hits);
// };
// const onInputchange =(e) =>{
//   setSearch(e.target.value);
// }
// const searchClick = () =>{
//   getEmployees();
// }

   return (
    <div className="App">

<Header />
<Search/>
<Employees />

    </div>
  );
}

export default App;
