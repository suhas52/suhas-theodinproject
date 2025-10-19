import { useState } from 'react'
import './App.css'

function App() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value,
        })
        console.log(formData);
    }

    const handleSubmit = (event) => {
        const submitUserDetails = async(req, res) =>
            {
                console.log("test")
                fetch('http://localhost:3000/sign-up', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
        }

        event.preventDefault();
        submitUserDetails();
    }

    return <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <input onChange={handleChange} id="username" name="username" placeholder="username" type="text" value={formData.username}/>
    <label htmlFor="password">Password</label>
    <input onChange={handleChange} id="password" placeholder='password' name="password" type="password" value={formData.password} />
    <button type="submit">Sign Up</button>
    </form>
    </>
}

export default App
