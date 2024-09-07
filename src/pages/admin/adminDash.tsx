import Header from '../../components/header';
import Menu from '../../components/menu';

const AdminDashboard = () => {
    
      return (
        <div className="custom-app adminDashboard">
          <Menu />
          <div className="custom-main-content">
            <Header name="admin"/>
            <div>
              Admin
            </div>
          </div>
        </div>
      );
    };
    

export default AdminDashboard;