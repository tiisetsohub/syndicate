import { useNavigate } from 'react-router-dom';
import { React } from 'react';

import './Adder.css';

function Adder(props) {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/add';
    navigate(path, { state :{email: props.email, employees: props.employees}});
  }
  return (
    <div className = 'Adder'>
        <span class="material-symbols-outlined" id = "adder-icon" onClick={routeChange}>
            add
        </span>
    </div>
  )
}

export default Adder