import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { name, username, email } = user;

    const OnInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/createuser", user);
        navigate("/");
    }
    

  return (
    <div className="d-flex justify-content-center vh-100 bg-light">
        <div className="card p-4 shadow" style={{ width: "500px", height: "500px", marginTop: "100px" }}>
            <h3 className="text-center mb-4">Register User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Name"
                        name = "name"
                        value={name}
                        onChange={OnInputChange}
                    />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="UserName"
                        name = "username"
                        value={username}
                        onChange={OnInputChange}
                    />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name = "email"
                        value={email}
                        onChange={OnInputChange}
                    />
                    <label htmlFor="floatingInput">Email</label>
                </div>

                <button type = "submit" className="btn btn-primary w-100 mt-4">Submit</button>
                <Link className="btn btn-secondary w-100 mt-2" to="/">Cancel</Link>
            </form>
        </div>
    </div>
  )
}
