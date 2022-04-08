import {useState,useEffect} from 'react';
import './App.css';
import SelectedEmployeeDetail from './SelectedEmployeeDetail';


  function App() {
    const [employees,setEmployees]=useState([]);
    const [selectedEmployee,setSelectedEmployee]=useState(null)

    const getData=()=>{
      fetch('cardData.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      )
        .then(res=>res.json())
        .then(data=>setEmployees(data));
    }
    useEffect(()=>{
      getData()
    },[])

    const onEmployeeSelected=(employee)=>{
      setSelectedEmployee(employee)
    }

    const handleChange=(event)=>{
      onEmployeeSelected(employees[event.target.value])
    }

    return (
    <main className="main-container">
      <select className="select" onChange ={handleChange} defaultValue="">
        <option value="">Choose an Employee</option>
        {employees.map((employee,index)=>{return <option value={index} key={index}>{employee.employeeName}</option>})}
      </select>
      {selectedEmployee ? <SelectedEmployeeDetail selectedEmployee={selectedEmployee}/>:null}
    </main>
  );
}


export default App;
