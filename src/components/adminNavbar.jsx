import { Link } from "react-router-dom";
import '../styles/adminNavbar.css';
const AdminNavBar = () => {
    return (
        <div className="adminNavBar">
            <div className="nav1">
                <h1>AdminPortal</h1>
            </div>
            <div className="nav2">
                <ul>
                <Link to='/admin/'>Dashboard</Link>
                    <Link to='/admin/add-book'>Add Books</Link>
                    <Link to='/admin/add-user'>Add User</Link>
                    <Link to='/admin/book-list'>Book List</Link>
                    <Link to='/admin/user-list'>User List</Link>
                    <Link to='/'>Logout</Link>
                </ul>
            </div>
        </div>
    )
}
export default AdminNavBar;