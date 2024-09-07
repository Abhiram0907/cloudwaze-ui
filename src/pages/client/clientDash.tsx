import Header from '../../components/header';
import Menu from '../../components/menu';

const ClientDashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="flex h-screen">
                <Menu />
            </div>
            <div className="flex-1 m-5 p-5 overflow-y-auto border-2 border-black rounded-md">
                <Header name='client'/>
            </div>
        </div>
    );
};

export default ClientDashboard;