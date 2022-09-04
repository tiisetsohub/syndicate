import { useLocation, useNavigate } from 'react-router-dom';
import { React, useState, useEffect, CSSProperties } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from "firebase/firestore";
import moment from "moment";
import RingLoader from "react-spinners/RingLoader";


import './Tree.css';
import HeaderB from '../../Components/HeaderB/HeaderB';
import Footer from '../../Components/Footer/Footer';
import Adder from '../../Components/Adder/Adder';
import Tableview from '../../Components/Tableview/Tableview';

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "25vh",
    height: "100vh"
};

function Tree() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const { state } = useLocation();
    const { email } = state;
    const [employees, setEmployees] = useState([]);
    const employeeRef = collection(db, 'Employees');
    let navigate = useNavigate();



    /*---------------------------------------------------------------*/

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        const getEmployees = async () => {
            const data = await getDocs(employeeRef);
            setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getEmployees()
        setTimeout(() => {
            setLoading(false);
        }, 700)

    }, []);

    function handleEdit(employee) {
        let num = employee.EmployeeNo;
        let path = `/edit/${num}`;
        navigate(path, {
            state: {
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
                Employees: employees
            }
        });
    }

    /*---------------------------------------------------------------*/
    return (
        <div className="Tree">
            <div class='header'>
                <HeaderB email={email} />
            </div>
            {loading ? <RingLoader color={color} loading={loading} cssOverride={override} size={100} /> :
            <div class='body'>
                <div className='body-tree'>
                    <div class='div-row'>
                        
                        {employees.filter((employee) => {
                            if (employee.Level === 4) {
                                return employee
                            }
                        }).map((employee) => {
                            let dollarUSLocale = Intl.NumberFormat('en-US');
                            let salary = dollarUSLocale.format(employee.Salary);
                            return (
                                <div key={employee.EmployeeNo} class='employeedivnode' onClick={() => handleEdit(employee)}>
                                    <div class="coldiv"><p>{employee.Name} : {employee.Level}</p></div>
                                </div>
                            )
                        })}
                    </div>
                    <div class='div-row'>
                        {employees.filter((employee) => {
                            if (employee.Level === 3) {
                                return employee
                            }
                        }).map((employee) => {
                            let dollarUSLocale = Intl.NumberFormat('en-US');
                            let salary = dollarUSLocale.format(employee.Salary);
                            return (
                                <div key={employee.EmployeeNo} class='employeedivnode' onClick={() => handleEdit(employee)}>
                                    <div class="coldiv"><p>{employee.Name} : {employee.Level}</p></div>
                                </div>
                            )
                        })}
                    </div>
                    <div class='div-row'>
                        {employees.filter((employee) => {
                            if (employee.Level === 2) {
                                return employee
                            }
                        }).map((employee) => {
                            let dollarUSLocale = Intl.NumberFormat('en-US');
                            let salary = dollarUSLocale.format(employee.Salary);
                            return (
                                <div key={employee.EmployeeNo} class='employeedivnode' onClick={() => handleEdit(employee)}>
                                    <div class="coldiv"><p>{employee.Name} : {employee.Level}</p></div>
                                </div>
                            )
                        })}
                    </div>
                    <div class='div-row'>
                        {employees.filter((employee) => {
                            if (employee.Level === 1) {
                                return employee
                            }
                        }).map((employee) => {
                            let dollarUSLocale = Intl.NumberFormat('en-US');
                            let salary = dollarUSLocale.format(employee.Salary);
                            return (
                                <div key={employee.EmployeeNo} class='employeedivnode' onClick={() => handleEdit(employee)}>
                                    <div class="coldiv"><p>{employee.Name} : {employee.Level}</p></div>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <Tableview email={email} />
                <Adder email={email} employees={employees} />
            </div>}
            <div class='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Tree;
