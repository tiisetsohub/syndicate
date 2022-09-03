import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../../firebase-config';
import { collection, getDocs } from "firebase/firestore";


import './Hub.css';
import HeaderB from '../../Components/HeaderB/HeaderB';
import Footer from '../../Components/Footer/Footer';

function Hub() {
    const { state } = useLocation();
    const { email } = state;
    const [employees, setEmployees] = useState([]);
    const employeeRef = collection(db, 'Employees');

    /*--------------------------------------------------------------------------*/
    useEffect(() => {       
        const getEmployees = async () => {
            const data = await getDocs(employeeRef);
            setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getEmployees()
    },[]);

    /*--------------------------------------------------------------------------*/
    
    return (
        <div className="Hub">
            <div class='header'>
                <HeaderB email = {email}/>
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
                    {employees.map((employee) =>{
                        let dollarUSLocale = Intl.NumberFormat('en-US');
                        let salary = dollarUSLocale.format(employee.Salary);
                        let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(employee.BirthDate);
                        return (
                            <div key = {employee.EmployeeNo} class = 'employeediv'>
                                <div class = "coldiv"><p>{employee.Name}</p></div>
                                <div class="coldiv"><p>{employee.Surname}</p></div>
                                <div class="coldiv"><p>{date}</p></div>
                                <div class="coldiv"><p>{employee.EmployeeNo}</p></div>
                                <div class="coldiv"><p>{employee.Department}</p></div>
                                <div class = "coldiv"><p>{employee.Role}</p></div>
                                <div class="coldiv"><p>R{salary}</p></div>
                                <div class="coldiv"><p>{employee.ReportingLineManager}</p></div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div class='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Hub;
