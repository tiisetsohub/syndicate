import { React, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../../firebase-config';
import { collection, getDocs } from "firebase/firestore";
import moment from "moment";


import './Hub.css';
import HeaderB from '../../Components/HeaderB/HeaderB';
import Footer from '../../Components/Footer/Footer';
import Adder from '../../Components/Adder/Adder';

function Hub() {
    const { state } = useLocation();
    const { email } = state;
    const [employees, setEmployees] = useState([]);
    const employeeRef = collection(db, 'Employees');
    const [searchTerm, setSearchTerm] = useState('');
    let navigate = useNavigate();

    /*--------------------------------------------------------------------------*/
    useEffect(() => {       
        const getEmployees = async () => {
            const data = await getDocs(employeeRef);
            setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getEmployees()
    },[]);

    function handleEdit(employee){
        let num = employee.EmployeeNo;
        let path = `/edit/${num}`;
        navigate(path, { state: {
            ID: employee.id,
            Name: employee.Name,
            Surname: employee.Surname,
            Department: employee.Department,
            Level: employee.Level,
            Role: employee.Role,
            Salary: employee.Salary,
            ReportingLineManager: employee.ReportingLineManager,
            EmployeeNo: employee.EmployeeNo,
            Email: employee.Email,
            Employees:employees
        } });
    }

    /*--------------------------------------------------------------------------*/
    
    return (
        <div className="Hub">
            <div class='header'>
                <HeaderB email = {email} setSearchTerm={setSearchTerm}/>
            </div>
            <div class='body'>
                <div className='body-hub'>
                    <div class = 'employeedivhead'>
                        <div class = 'coldiv'><h6>Name</h6></div>
                        <div class = 'coldiv'><h6>Surname</h6></div>
                        <div class = 'coldiv'><h6>Birth Date</h6></div>
                        <div class = 'coldiv'><h6>Employee Number</h6></div>
                        <div class = 'coldiv'><h6>Department</h6></div>
                        <div class = 'coldiv'><h6>Role</h6></div>
                        <div class = 'coldiv'><h6>Salary</h6></div>
                        <div class = 'coldiv'><h6>Reporting Line Manager</h6></div>
                    </div>
                    {employees.filter((employee) => {
                        if (searchTerm === ""){
                            return employee
                        }
                        else if (employee.Name.toLowerCase().includes(searchTerm.toLowerCase()) || employee.Department.toLowerCase().includes(searchTerm.toLowerCase()) || employee.Role.toLowerCase().includes(searchTerm.toLowerCase())){
                            return employee
                        }
                    }).map((employee) =>{
                        let dollarUSLocale = Intl.NumberFormat('en-US');
                        let salary = dollarUSLocale.format(employee.Salary);
                        return (
                            <div key = {employee.EmployeeNo} class = 'employeediv' onClick={()=>handleEdit(employee)}>
                                <div class = "coldiv"><p>{employee.Name}</p></div>
                                <div class="coldiv"><p>{employee.Surname}</p></div>
                                <div class="coldiv"><p>{moment(employee.BirthDate.toDate()).format("MMM Do YYYY")}</p></div>
                                <div class="coldiv"><p>{employee.EmployeeNo}</p></div>
                                <div class="coldiv"><p>{employee.Department}</p></div>
                                <div class = "coldiv"><p>{employee.Role}</p></div>
                                <div class="coldiv"><p>R{salary}</p></div>
                                <div class="coldiv"><p>{employee.ReportingLineManager}</p></div>
                            </div>
                        )
                    })}
                </div>
                <Adder email={email} employees={employees}/>
            </div>
            <div class='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Hub;
