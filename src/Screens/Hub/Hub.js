import { React, useState, useEffect, CSSProperties } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../../firebase-config';
import { collection, getDocs } from "firebase/firestore";
import moment from "moment";
import RingLoader from "react-spinners/RingLoader";


import './Hub.css';
import HeaderB from '../../Components/HeaderB/HeaderB';
import Footer from '../../Components/Footer/Footer';
import Adder from '../../Components/Adder/Adder';
import Treeview from '../../Components/Treeview/Treeview';


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "25vh",
    height: "100vh"
};

function Hub() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const { state } = useLocation();
    const { email } = state;
    const [employees, setEmployees] = useState([]);
    const employeeRef = collection(db, 'Employees');
    const [searchTerm, setSearchTerm] = useState('');
    const [order, setOrder] = useState('ASC');
    let navigate = useNavigate();

    /*--------------------------------------------------------------------------*/
    useEffect(() => {       
        const getEmployees = async () => {
            const data = await getDocs(employeeRef);
            setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getEmployees()
        setTimeout(() => {
            setLoading(false);
        },700)

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

    const sorting = (col) => {
        if (order === 'ASC'){
            const sorted = [...employees].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setEmployees(sorted);
            setOrder('DSC')
        }
        if (order === 'DSC') {
            const sorted = [...employees].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setEmployees(sorted);
            setOrder('ASC')
        }
    }

    const sortingNo = (col) => {
        if (order === 'ASC') {
            const sorted = [...employees].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            );
            setEmployees(sorted);
            setOrder('DSC')
        }
        if (order === 'DSC') {
            const sorted = [...employees].sort((a, b) =>
                a[col] < b[col] ? 1 : -1
            );
            setEmployees(sorted);
            setOrder('ASC')
        }
    }


    /*--------------------------------------------------------------------------*/
    
    return (
        <div className="Hub">
            <div class='header'>
                <HeaderB email = {email} setSearchTerm={setSearchTerm}/>
            </div>
            {loading ? <RingLoader color={color} loading={loading} cssOverride={override} size={100} /> :
            <div class='body'>
                <div className='body-hub'>
                    <div class = 'employeedivhead'>
                        <div class='coldiv' onClick={() => sorting('Name')}><h6>Name</h6></div>
                        <div class='coldiv' onClick={() => sorting('Surname')}><h6>Surname</h6></div>
                        <div class='coldiv'><h6>Birth Date</h6></div>
                        <div class='coldiv' onClick={() => sortingNo('EmployeeNo')}><h6>Employee Number</h6></div>
                        <div class='coldiv' onClick={() => sorting('Department')}><h6>Department</h6></div>
                        <div class='coldiv' onClick={() => sorting('Role')}><h6>Role</h6></div>
                        <div class='coldiv' onClick={() => sortingNo('Salary')}><h6>Salary</h6></div>
                        <div class='coldiv' onClick={() => sorting('ReportingLineManager')}><h6>Reporting Line Manager</h6></div>
                    </div>
                    {employees.filter((employee) => {
                        if (searchTerm === ""){
                            return employee
                        }
                        else if (employee.Name.toLowerCase().includes(searchTerm.toLowerCase()) || employee.Department.toLowerCase().includes(searchTerm.toLowerCase()) || employee.Role.toLowerCase().includes(searchTerm.toLowerCase()) || employee.ReportingLineManager.toLowerCase().includes(searchTerm.toLowerCase()) || employee.EmployeeNo.toString().toLowerCase().includes(searchTerm.toLowerCase()) || employee.Surname.toLowerCase().includes(searchTerm.toLowerCase())){
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
                <Treeview email={email} employees={employees} />
                <Adder email={email} employees={employees}/>
            </div>}
            <div class='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Hub;
