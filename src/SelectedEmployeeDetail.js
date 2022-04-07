import {useState} from 'react'

const SelectedEmployeeDetail=({selectedEmployee})=>{
    const [visible, setVisible] = useState(false)
    const handleClick= () =>{setVisible(!visible)}
    if (visible) {return(
        <section className="card">
            <img src={require("" + selectedEmployee.picture) } alt="employee"></img>    
            <h2>{selectedEmployee.employeeName}</h2>
            <p>{selectedEmployee.jobTitle}</p>
            <p>{selectedEmployee.companyName}</p>
            <div>
                <img className="sm-icons" src={require('./facebook2.png') } alt="facebook"></img>
                <img className="sm-icons" src={require('./twitter.png') } alt="twitter"></img>
                <img className="sm-icons" src={require('./linkedin.png') } alt="linkedin"></img>
            </div>
            <button onClick={handleClick}>Hide Info</button>
            <p> {selectedEmployee.moreInfo}</p>
        </section>
    )}
    else {
        return(
            <section className="card">
            <img src={require("" + selectedEmployee.picture) } alt="employee"></img>
            <h2>{selectedEmployee.employeeName}</h2>
            
            <p className='job-title'>{selectedEmployee.jobTitle}</p>
            <p>{selectedEmployee.companyName}</p>
            <div>
            <img className="sm-icons" src={require('./facebook2.png') } alt="facebook"></img>
            <img  className="sm-icons" src={require('./twitter.png') } alt="twitter"></img>
            <img className="sm-icons" src={require('./linkedin.png') } alt="linkedin"></img>
            </div>
            <button onClick={handleClick}>More Info</button>
        </section>
        )
    }
}

export default SelectedEmployeeDetail;