import Header from '../../components/header';
import Menu from '../../components/menu';
import '../../custom.css';

const ClientDashboard = () => {

    return (
    <div className="custom-app clientDashboard">
        <div className="custom-menu-content">
            <Menu />
        </div>
        <div className="custom-main-content">
            <Header name='client'/>
        </div>
    </div>
    );
};

export default ClientDashboard;