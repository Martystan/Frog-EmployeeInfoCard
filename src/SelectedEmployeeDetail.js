import {useState} from 'react'


const SelectedEmployeeDetail=({selectedEmployee})=>{
    const [visible, setVisible] = useState(false)
    const handleClick= () =>{setVisible(!visible)}
    if (visible) {return(
        <section className="card">
            <img src={require("" + selectedEmployee.picture) } alt="employee"></img>    
            <h2>{selectedEmployee.employeeName}</h2>
            <p className='job-title'>{selectedEmployee.jobTitle}</p>
            <p className='company-name'>{selectedEmployee.companyName}</p>
            <div >
                <a href="https://www.facebook.com/frogsystems" target='_blank'><img className="sm-icons" src={require('./facebook2.png') } alt="facebook"></img></a>
                
                <a href='https://www.linkedin.com/company/frog-systems-ltd/' target="_blank"><img className="sm-icons" src={require('./linkedin.png') } alt="linkedin"></img></a>
                <a href='https://twitter.com/frogsystemsltd' target="_blank"><img className="sm-icons" src={require('./twitter.png') } alt="twitter"></img></a>
            </div>
            <div className='more-info'>
                <p onClick={handleClick}>Hide Info</p>
                <img src={require('./info.png')} alt='info' ></img>
            </div>
            <p className='info'> {selectedEmployee.moreInfo}</p>
        </section>
    )}
    else {
        return(
            <section className="card">
                <img src={require("" + selectedEmployee.picture) } alt="employee"></img>
                <h2>{selectedEmployee.employeeName}</h2>
            
                <p className='job-title'>{selectedEmployee.jobTitle}</p>
                <p className='company-name'>{selectedEmployee.companyName}</p>
                <div>
                    <a href="https://www.facebook.com/frogsystems" target='_blank'><img className="sm-icons" src={require('./facebook2.png') } alt="facebook"></img></a>
                    
                    <a href='https://www.linkedin.com/company/frog-systems-ltd/' target="_blank"><img className="sm-icons" src={require('./linkedin.png') } alt="linkedin"></img></a>
                    <a href='https://twitter.com/frogsystemsltd' target="_blank"><img className="sm-icons" src={require('./twitter.png') } alt="twitter"></img></a>
            </div>
            <div className='more-info'>
                <p onClick={handleClick}>More Info</p>
                <img src={require('./info.png')} alt='info' ></img>
            </div>
        </section>
        )
    }
}

export default SelectedEmployeeDetail;