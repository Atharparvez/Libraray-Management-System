import { useNavigate } from "react-router-dom"
import '../styles/userLogin.css';
const UserLogin = () => {

    let navigate = useNavigate()
    let login=(a)=>{
        a.preventDefault()
        navigate('/user')
    }
    return (
        <div className="User1">
            <div className="userlogin">
                <div className="form_container_card">
                    <h1 style={{ 'color': 'white' }}>Login as User</h1>
                    <div className="forminput">
                        <form onSubmit={login}>
                            <div className="useremail">
                                <input type="Email"  placeholder="Enter Email" />
                            </div>
                            <div className="userpassword">
                                <input type="password"  placeholder="Password" />
                            </div>
                            <button><b>Login</b></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserLogin;