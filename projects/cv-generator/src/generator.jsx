import { useState } from 'react';
import PersonalInfoForm from './personal_info_form'


function Generator() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    return <div
        className="user-info-container"
    >
        <PersonalInfoForm formData={formData} handleChange={handleChange}/>
        </div>
}

export default Generator;