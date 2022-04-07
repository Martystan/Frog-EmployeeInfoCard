import {useState,useEffect} from 'react';
import './App.css';


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
      This is data
    </div>
  );
}


export default App;
