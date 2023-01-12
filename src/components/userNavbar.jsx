import { Link } from "react-router-dom";

import '../styles/UserNavbar.css';
const UserNavbar = () => 
{
    return (
        <div className="userNavbar">
            <div className="nav1">
                <h1>User Portal</h1>
            </div>
            <div className="userNav2">
                <ul>
                    <Link to='/user/'  >DashBoard</Link>
                    <Link to='/user/book-list' >Book List</Link>
                    <Link to='/' >Logout</Link>
                </ul>
            </div>
        </div>
    );
}

export default UserNavbar;