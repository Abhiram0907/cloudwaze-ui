import Header from '../../components/header';
import Menu from '../../components/menu';

const AdminDashboard = () => {
    
      return (
        <div className="app adminDashboard">
          <Menu />
          <div className="main-content">
            <Header name="admin"/>
            <div>
              Admin
            </div>
          </div>
        </div>
      );
    };
    

export default AdminDashboard;