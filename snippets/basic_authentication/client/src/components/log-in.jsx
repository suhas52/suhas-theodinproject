import { useState } from 'react'

function LogIn() {
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/log-in", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify(formData)
            })

        const data = await response.json();
        if (data.success) {
            console.log("logged in as:", data.user);
        } else {
            console.log("Invalid credentials");
        }
        } catch (err) {
            console.log(err);
        }
    }

    return <>
    <h1>Log in</h1>
    <form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <input onChange={handleChange} id="username" name="username" placeholder="username" type="text" value={formData.username}/>
    <label htmlFor="password">Password</label>
    <input onChange={handleChange} id="password" placeholder='password' name="password" type="password" value={formData.password} />
    <button type="submit">Log in</button>
    </form>
    </>
}

export default LogIn;