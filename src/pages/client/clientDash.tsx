import Header from '../../components/header';
import Menu from '../../components/menu';
import './clientDash.css';
const ClientDashboard = () => {

    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="menu">
                <Menu />
            </div>
            <div>Timesheets</div>
            <div>Docs</div>
            <div>Current User State</div>
            <div>Time sheet entry</div>
            <div>Calendar Select</div>
            <div>Buttons</div>
        </div>
    );
};

export default ClientDashboard;