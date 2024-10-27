import React,{useEffect, useState} from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect( ()=>{
        getAllEmployees();
    },[])

    const getAllEmployees=()=>{
        listEmployees().then((respose)=>{
            setEmployees(respose.data)
        }).catch( error => {
            console.error(error);
        })
    }
    
    const addNewEmployee=()=>{
        navigator("/add-employee")
    }

    const updateHandler = (id) =>{
        navigator(`/edit-employee/${id}`)
    }

    const deleteHandler = (id) =>{
        console.log(id)
        deleteEmployee(id).then((respose)=>{
            getAllEmployees();
        }).catch( error => {
            console.error(error);
        })
        
    }

  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee LastName</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=>updateHandler(employee.id)}>Update</button>
                            <button className='btn btn-danger' onClick={()=>deleteHandler(employee.id)}>Delete</button>

                        </td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  );
}

export default ListEmployeeComponent;
