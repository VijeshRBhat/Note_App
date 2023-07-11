import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {

    const [info, setInfo] = useState({ name: "", email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: info.name, email: info.email, password: info.password })
        });
        const json = await response.json()

        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Account created", "success");
            props.setdmail(json.email);

            navigate('/');

        }
        else {
            props.showAlert("Error", "danger");
        }
    }


    const onChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>Signup to EverNotes</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 my-5">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" autoComplete="on" className="form-control" onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" autoComplete="on" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" autoComplete="on" className="form-control" onChange={onChange} id="password" name="password" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Sign-up</button>
            </form>
        </div>
    )
}

export default Signup

