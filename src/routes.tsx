import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import ClientDashboard from './pages/client/clientDash';
import AdminDashboard from './pages/admin/adminDash';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/client" element={<ClientDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;