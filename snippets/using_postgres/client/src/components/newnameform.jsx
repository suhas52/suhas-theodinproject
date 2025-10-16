import { useState } from "react"

function Nameform() {
    
    const [formData, setFormData] = useState({});
    
    function onChangeHandler(e) {
        setFormData({
            ...formData, [e.target.name]: [e.target.value],
        })
    }
    
    const handleSubmit = async() => {
        const response = await fetch("http://localhost:8000/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify( formData ),
        });
        
        const data = await response.json();
        console.log("Response from server:", data);
        console.log(formData)
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input onChange={onChangeHandler} value={formData.value} name="name" type="text" placeholder="name" />
        <button type="submit">Submit</button>
        </form>
    )
}

export default Nameform;