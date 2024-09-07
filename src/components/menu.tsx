import './menu.css'
const Menu = () => {

    return (
        <div className="menu-container">
            <div className='menu-items'>Login</div>
            <div className='menu-items'>Workspace</div>
            <ul>
                <li>Time Entry</li>
                <li>TO DO</li>
                <li>Profile</li>
            </ul>
            <div className='menu-items'>Help</div>
            <ul>
                <li>Logout</li>
                <li>SUPPORT</li>
                <li>FAQ</li>
            </ul>
        </div>
    );
};

export default Menu;