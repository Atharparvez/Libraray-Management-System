import { Routes, Route } from "react-router-dom";
import ReadBook from "./readBook";
import BookList from "./bookList";
import UserDashboard from "./UserDashboard";
import UserNavbar from "./userNavbar";


const UserPortal = () => {
    return (
        <div className="userportal">
          <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
            </Routes>
        </div>);
}

export default UserPortal;