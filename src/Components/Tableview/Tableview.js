import { useNavigate } from 'react-router-dom';
import { React } from 'react';

import './Tableview.css';

function Tableview(props) {
    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/hub ';
        navigate(path, { state: { email: props.email } });
    }
    return (
        <div className='Tableview'>
            <span class="material-symbols-outlined" id="tableview-icon" onClick={routeChange}>
                table_chart
            </span>
        </div>
    )
}

export default Tableview