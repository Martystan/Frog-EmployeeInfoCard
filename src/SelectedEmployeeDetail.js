const SelectedEmployeeDetail=({selectedEmployee})=>{
    console.log(selectedEmployee.moreInfo)
    return(
        <div>
            <h2>{selectedEmployee.employeeName}</h2>
            <img src={require("" + selectedEmployee.picture) } alt="employee"></img>
        </div>
    )
}

export default SelectedEmployeeDetail;