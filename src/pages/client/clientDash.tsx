import Header from '../../components/header';
import Menu from '../../components/menu';
import './clientDash.css';
const ClientDashboard = () => {

    return (
    <div className="app">
      <Menu />
        <div className="main-content">
            <Header />
        </div>
    </div>
    );
};

export default ClientDashboard;