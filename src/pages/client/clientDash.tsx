import Header from '../../components/header';
import Menu from '../../components/menu';
import './clientDash.css';
const ClientDashboard = () => {

    return (
    <div className="app clientDashboard">
        <div className="menu-content">
            <Menu />
        </div>
        <div className="main-content">
            <Header name='client'/>
        </div>
    </div>
    );
};

export default ClientDashboard;