import { useState, useEffect } from "react";
import '../styles/userList.css'
const UserList = () => {
    let [user, setuser] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:500/users')
            let data = await response.json()
            setuser(data)
        }
        fetchData()

    })
    let Duser = (id, name) => {
        fetch(`http://localhost:500/users/${id}`, {
            method: 'DELETE'
        });
        alert(`${name} will be deleted permanently`)
    }
    return (
        <div className="userlist">
            {
                user.map((data) => (
                    <div className="UL">
                        <h2>Name:-{data.name}</h2>
                        <h3>Age:-{data.age}</h3>
                        <h4>Email:-{data.email}</h4>
                        <h5>PhoneNumber:-{data.phoneNumber}</h5>
                        <button onClick={() => Duser(data.id, data.name)}>Delete User</button>
                    </div>
                ))
            }
        </div>);
}
export default UserList;