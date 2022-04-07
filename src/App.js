import {useState,useEffect} from 'react';
import './App.css';
// import EmployeeSelector from './EmployeeSelector';


  function App() {
    const [employees,setEmployees]=useState([]);
    const getData=()=>{
      fetch('cardData.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setEmployees(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])

    

  return (
    <div className="App">
      <select defaultValue="">
      <option value="">Choose an Employee</option>
      {employees.map((employee,index)=>{return <option value={index} key={index}>{employee.employeeName}</option>})}
      </select>
    </div>
  );
}


export default App;
