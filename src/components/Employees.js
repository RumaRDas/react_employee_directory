import React from 'react';
//import EmployeeList from './EmployeeList';


const Employees = (props) => {
const {employees} = props;
    return (
        <div className="row">
          
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                {employees.map(employee => 
                    <tbody>
                    <tr>
                        <td><img src={employee.picture.medium}/></td>
                        <td>{employee.name.first}{" "}{employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.dob.age}</td>
                    </tr> 
                    </tbody>)}

             
                
                    </table>
          </div>
        )

}

export default Employees;
