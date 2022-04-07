import {useState} from 'react'

const SelectedEmployeeDetail=({selectedEmployee})=>{
    const [visible, setVisible] = useState(false)
    const handleClick= () =>{setVisible(!visible)}
    if (visible) {return(
        <div>
            <h2>{selectedEmployee.employeeName}</h2>
            <img src={require("" + selectedEmployee.picture) } alt="employee"></img>
            <p>{selectedEmployee.jobTitle}</p>
            <p>{selectedEmployee.companyName}</p>
            <button onClick={handleClick}>Hide Info</button>
            <p> {selectedEmployee.moreInfo}</p>
        </div>
    )}
    else {
        return(
            <div>
            <h2>{selectedEmployee.employeeName}</h2>
            <img src={require("" + selectedEmployee.picture) } alt="employee"></img>
            <p>{selectedEmployee.jobTitle}</p>
            <p>{selectedEmployee.companyName}</p>
            <button onClick={handleClick}>More Info</button>
            
        </div>
        )
    }
}

export default SelectedEmployeeDetail;