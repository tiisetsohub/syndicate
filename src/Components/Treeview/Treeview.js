import { useNavigate } from 'react-router-dom';
import { React } from 'react';

import './Treeview.css';

function Treeview(props) {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/tree ';
    navigate(path, { state: { email: props.email, employees: props.employees } });
  }
  return (
    <div className='Treeview'>
      <span class="material-symbols-outlined" id="treeview-icon" onClick={routeChange}>
        account_tree
      </span>
    </div>
  )
}

export default Treeview