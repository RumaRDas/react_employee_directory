import React from 'react'

const EmployeeList = (props) => {

        return (
            <div>
            <tbody>
            <tr>
                <td><img src={props.imge} /></td>
                <td>{props.first}{" "}{props.last}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.age}</td>
            </tr> 
            </tbody> 
            </div>
        )

}

export default EmployeeList
