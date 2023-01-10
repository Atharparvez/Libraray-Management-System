import AdminDashborad from "./adminDashboard";
import AdminNavBar from "./adminNavbar";
import { Routes, Route } from "react-router-dom";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBook";
import AddBook from "./addbook";
import AddUser from "./addUser";

const AdminPortal = () => {
    return (<div className="adminportal">
       <AdminNavBar/>
       <Routes>
        <Route path='/'element={<AdminDashborad/>}/>
        <Route path='/book-list' element={<BookList/>} />
        <Route path='/user-list' element={<UserList/>}/>
        <Route path="/book-list/:id" element={<ReadBook/>}/>
        <Route path="add-book" element={<AddBook/>}/>
        <Route path="/add-user" element={<AddUser/>} />
       </Routes>
    </div>);
}

export default AdminPortal;