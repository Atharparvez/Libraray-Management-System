import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUser.css';
const AddUser = () => {

    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    let [email, setEmail] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let navigate = useNavigate()

    let Submit = (e) => {
        e.preventDefault()
        let addUser = { name, age, email, phoneNumber }
        fetch('http://localhost:500/users', {
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(addUser)
        })
        alert(`User Added`)
        navigate('/admin/user-list')


    }
    return (
        <div className="add_user">
            <h1>Add Users!</h1>
            <div className="form_adduser">
                <form onSubmit={Submit}>
                    <div className="classname">
                        <input type="text" value={name} onChange={(a)=>setName(a.target.value)} placeholder="Name" />
                    </div>
                    <div className="classname">
                        <input type="number" min='1'  value={age} onChange={(a)=>setAge(a.target.value)}placeholder="Age" />
                    </div>
                    <div className="classname">
                        <input type="email" value={email} onChange={(a)=>setEmail(a.target.value)} placeholder="Email" />
                    </div>
                    <div className="classname">
                        <input type="tel"value={phoneNumber} onChange={(a)=>setPhoneNumber(a.target.value)} placeholder="Phone Number" />
                    </div>
                    <button>Submit</button>
                    
                </form>
            </div>
        </div>);
}

export default AddUser;