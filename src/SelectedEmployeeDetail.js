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
                <a href="https://www.facebook.com/frogsystems" target='_blank'><img className="sm-icons" src={require('./facebook2.png') } alt="facebook"></img></a>
                
                <a href='https://www.linkedin.com/company/frog-systems-ltd/' target="_blank"><img className="sm-icons" src={require('./linkedin.png') } alt="linkedin"></img></a>
                <a href='https://twitter.com/frogsystemsltd' target="_blank"><img className="sm-icons" src={require('./twitter.png') } alt="twitter"></img></a>
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
                    <a href="https://www.facebook.com/frogsystems" target='_blank'><img className="sm-icons" src={require('./facebook2.png') } alt="facebook"></img></a>
                    
                    <a href='https://www.linkedin.com/company/frog-systems-ltd/' target="_blank"><img className="sm-icons" src={require('./linkedin.png') } alt="linkedin"></img></a>
                    <a href='https://twitter.com/frogsystemsltd' target="_blank"><img className="sm-icons" src={require('./twitter.png') } alt="twitter"></img></a>
            </div>
            <button onClick={handleClick}>More Info</button>
        </section>
        )
    }
}

export default SelectedEmployeeDetail;