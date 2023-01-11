import { Link } from "react-router-dom";
const UserNavbar = () => {
    return (
        <div className="userNavbar">
            <div className="nav1">
                <h1>User Portal</h1>
            </div>
            <div className="nav2">
                <ul>
                    <Link to='/user/'>Dashboard</Link>
                    <Link to='/user/book-list'>Book List</Link>
                    <Link to='/'>Logout</Link>
                </ul>
            </div>
        </div>);
}

export default UserNavbar;