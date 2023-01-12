import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css';
const AdminLogin = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let login = (a) => {
        a.preventDefault();
        let data = { email, password }// data from input
        //admin validation
        navigate('/admin')
        // if (email == "athar@gmail.com" && password == 12345) {
        //     navigate('/admin')
        // }
        // else {
        //     alert('Invalid credentials')
        // }
    }
    return (
        <div className="admin1">
            <div className="adminlogin">
                <div className="form container card">
                    <div className="Head">
                    <h1 style={{ 'color': 'white' }} >Login as Admin</h1>
                    </div>
                <div className="form_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="Email"  value={email} onChange={(a) => setEmail(a.target.value)} placeholder="Enter Email" />
                        </div>
                        <div className="password">
                            <input type="password" value={password} onChange={(b) => setPassword(b.target.value)} placeholder="Password" />
                        </div>
                        <button><b>Login</b></button>
                    </form>
                </div>
            </div>
        </div>
        </div >
    )
}
export default AdminLogin;