import { Link } from "react-router-dom";
import '../styles/landingpage.css';
const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="selectlogintype">
                <div className="head">
                    <h2>Library Management System</h2>
                </div>
                <div className="logo">
                    <img src='images/userlogo.jpg' height={50} width={50} alt="" />
                    <img src='images/userlogo.jpg' height={50} width={50} alt="" />
                </div>
                <div className="admin">
                    <button id="AL"><Link to='/admin-login'><b>Admin Login</b></Link></button>
                    <button id="UL"><Link to='/user-login'><b>User Login</b></Link></button>
                </div>

            </div>

        </div>
    )
}
export default LandingPage;