import { useLocation, useNavigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';


import './Edit.css';
import HeaderB from '../../Components/HeaderB/HeaderB';
import Footer from '../../Components/Footer/Footer';

function Edit() {
    let navigate = useNavigate();
    const { state } = useLocation();
    const {
        ID,
        Name,
        Surname,
        Department,
        Level,
        Role,
        Salary,
        ReportingLineManager,
        Email,
        Employees,
        EmployeeNo
    } = state;
    const [newName,setNewName] = useState(Name);
    const [newSurname, setNewSurname] = useState(Surname);
    const [newDepartment, setNewDepartment] = useState(Department);
    const [newLevel, setNewLevel] = useState(Level);
    const [newRole, setNewRole] = useState(Role);
    const [newSalary, setNewSalary] = useState(Salary);
    const [newReportingLineManager, setNewReportingLineManager] = useState(ReportingLineManager);
    const [uniqueEmps, setUniqueEmps] = useState([]);




    /*---------------------------------------------------------------*/

    const goBack = () => {
        navigate(-1);
    }

    const updateEmployee = async () => {
        const empref = doc(db, 'Employees',ID);
        await updateDoc(empref, { 
            Name: newName,
            Surname: newSurname,
            Department: newDepartment,
            Level: newLevel,
            Role: newRole,
            Salary: newSalary,
            ReportingLineManager: newReportingLineManager,
        })
        goBack();
    };

    const deleteEmployee = async () => {
        await deleteDoc(doc(db, 'Employees', ID));
        goBack();
    }

    const tryDelete = () => {
        let isExecuted = window.confirm('Are you sure you want to delete this employee?');
        if (isExecuted) {
            deleteEmployee();
        }
    }

    useEffect(() => {
        Employees.map((employee) => {
            if (!uniqueEmps.includes(employee.ReportingLineManager) && employee.Level >= Level) {
                setUniqueEmps(uniqueEmps => [...uniqueEmps, employee.ReportingLineManager])
            }
        })
    }, []);
    const uniemps = [...new Set(uniqueEmps)];
    console.log(uniemps)


    /*---------------------------------------------------------------*/
    return (
        <div className="Edit">
            <div class='header'>
                <HeaderB email={Email}/>
            </div>
            <div class='body'>
                <div className='body-edit'>
                    <h4>Edit details</h4>
                    <input type="text" class="inputboxedit" placeholder={Name} onChange={(event)=>{setNewName(event.target.value)}}/>
                    <input type="text" class="inputboxedit" placeholder={Surname} onChange={(event) => { setNewSurname(event.target.value) }} />
                    <input type="text" class="inputboxedit" placeholder={Department} onChange={(event) => { setNewDepartment(event.target.value) }} />
                    <input type="number" class="inputboxedit" placeholder={Level} min={Level} max={4} onChange={(event) => { setNewLevel(event.target.valueAsNumber) }} />
                    <input type="text" class="inputboxedit" placeholder={Role} onChange={(event) => { setNewRole(event.target.value) }} />
                    <input type="number" class="inputboxedit" placeholder={Salary} min={Salary} onChange={(event) => { setNewSalary(event.target.valueAsNumber) }} />
                    <select class="inputboxedit" label="RLM" value={ReportingLineManager} onChange={(event) => { setNewReportingLineManager(event.target.value) }}>
                        {uniemps.filter((ReportingLineManager) => {
                            let reportsplit = ReportingLineManager.split(" ");
                            if (ReportingLineManager !== "" && parseInt(reportsplit[2]) !== EmployeeNo) {
                                return ReportingLineManager
                            }
                        }).map((ReportingLineManager) => (
                            <option key={ReportingLineManager} value={ReportingLineManager}>
                                {ReportingLineManager}
                            </option>
                        ))}
                    </select>
                    <div className="edit-buttons">
                        <button class="button" onClick={goBack}>CANCEL</button>
                        <button class="button" onClick={updateEmployee}>UPDATE</button>
                    </div>
                    <br />
                    <button class="button" className = "dlt-button" onClick={tryDelete}>DELETE</button>

                </div>
            </div>
            <div class='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Edit;
