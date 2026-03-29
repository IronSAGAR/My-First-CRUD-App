import React, { useEffect  } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewUser() {
    
    const [user, setUser] = React.useState({
        name: "",
        username: "",
        email: ""
    });
    
    const { id } = useParams();
    const { name, username, email } = user;

    useEffect(() => {
        const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/users/${id}`);
        setUser(result.data);
    }
        loadUser();
    }, [id]);

    


  return (
    <div className="d-flex justify-content-center mt-2 bg-light">
        <div className="card shadow-lg border-0" style={{ width: "450px" }}>
    
            {/* Header */}
            <div className="card-header bg-primary text-white text-center py-3">
            <h4 className="mb-0">User Details</h4>
            </div>

            {/* Body */}
            <div className="card-body">

                <ul className="list-group list-group-flush">
                
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="fw-semibold">Name</span>
                        <span className="text-muted">{name}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between">
                        <span className="fw-semibold">Username</span>
                        <span className="text-muted">{username}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between">
                        <span className="fw-semibold">Email</span>
                        <span className="text-muted">{email}</span>
                    </li>

                </ul>

                {/* Button */}
                <div className="d-grid mt-4">
                    <Link className="btn btn-outline-primary" to="/">Back to Home</Link>
                </div>

            </div>
        </div>
    </div>

  )
}

