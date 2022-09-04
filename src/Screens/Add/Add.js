import { useNavigate, useLocation } from 'react-router-dom';
import { React, useState } from 'react';
import { collection, Timestamp, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

import './Add.css';
import HeaderB from "../../Components/HeaderB/HeaderB";
import Footer from "../../Components/Footer/Footer";

function Add() {
    const { state } = useLocation();
    const { email, employees } = state;
    let navigate = useNavigate();
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');
    const [Email, setEmail] = useState('');
    const [EmployeeNo, setEmployeeNo] = useState(0);
    const [BirthDate, setBirthDate] = useState('');
    const [Department, setDepartment] = useState('');
    const [Level, setLevel] = useState(1);
    const [Role, setRole] = useState('');
    const [Salary, setSalary] = useState(0);
    const [ReportingLineManager, setReportingLineManager] = useState('');

    /*-------------------------------------------------------------*/
    const goBack = () => {
        navigate(-1);
    }

    const addEmployee = async () => {
        let date = new Date(BirthDate);
        let timestamp = Timestamp.fromDate(date);
        await addDoc(collection(db, 'Employees'), {
            Name: Name,
            Surname: Surname,
            BirthDate: timestamp,
            Email: Email,
            Department: Department,
            Level: Level,
            Role: Role,
            Salary: Salary,
            ReportingLineManager: ReportingLineManager,
        });
        goBack();
    }


    /*-------------------------------------------------------------*/

    return (
        <div className="Add">
            <div class='header'>
                <HeaderB email={email}/>
            </div>
            <div class='body'>
                <div className='body-edit'>
                    <h4>Add details</h4>
                    <input type="text" class="inputboxedit" placeholder='Name' onChange={(event) => { setName(event.target.value) }} />
                    <input type="text" class="inputboxedit" placeholder='Surname' onChange={(event) => { setSurname(event.target.value) }} />
                    <input type="email" class="inputboxedit" placeholder='Email' onChange={(event) => { setEmail(event.target.value) }} />
                    <input type="date" class="inputboxedit" placeholder='BirthDate' onChange={(event) => { setBirthDate(event.target.value) }} />
                    <input type="text" class="inputboxedit" placeholder='Department' onChange={(event) => { setDepartment(event.target.value) }} />
                    <input type="number" class="inputboxedit" placeholder='Level' min={1} max={4} onChange={(event) => { setLevel(event.target.valueAsNumber) }} />
                    <input type="number" class="inputboxedit" placeholder='EmployeeNo' min={0} onChange={(event) => { setEmployeeNo(event.target.valueAsNumber) }} />
                    <input type="text" class="inputboxedit" placeholder='Role' onChange={(event) => { setRole(event.target.value) }} />
                    <input type="number" class="inputboxedit" placeholder='Salary' min={0} onChange={(event) => { setSalary(event.target.valueAsNumber) }} />
                    <select class="inputboxedit" label="RLM" value={ReportingLineManager} onChange={(event) => { setReportingLineManager(event.target.value) }}>
                        <option value=''>Reporting Line Manager</option>
                        {employees.filter((employee) => {
                            let reportsplit = employee.ReportingLineManager.split(" ");
                            if (employee.ReportingLineManager !== "-" && parseInt(reportsplit[2]) !== EmployeeNo && employee.Level >= Level) {
                                return employee
                            }
                        }).map((employee) => (
                            <option key={employee.EmployeeNo} value={employee.ReportingLineManager}>
                                {employee.ReportingLineManager}
                            </option>
                        ))}
                    </select>
                    <div className="edit-buttons">
                        <button class="button" onClick={goBack}>CANCEL</button>
                        <button class="button" onClick={addEmployee}>ADD</button>
                    </div>
                </div>
            </div>
            <div class='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Add;