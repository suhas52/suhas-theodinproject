import { useState } from 'react';
import PersonalInfoForm from './personal_info_form'


function Generator() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })
    
    const [isHidden, setIsHidden] = useState({
        personal: false,
        education: false,
        experience: false,
    });
    
    
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    
    const handleSubmit = (section) => (e) => {
        
        e.preventDefault();
        const values = [formData.name, formData.email, formData.phone, formData.address];
        console.log(values)
        setIsHidden(prev => ({ ...prev, [section]: true }));
        
    }
    
    const handleEdit = (section) => (e) => {
        e.preventDefault();

        setIsHidden(prev => ({ ...prev, [section]: false}))
    }
    
    return <div
    className="user-info-container"
    >
    {!isHidden.personal ? <PersonalInfoForm formData={formData} 
    handleChange={handleChange} 
    handleSubmit={handleSubmit('personal')}/> : <button onClick={handleEdit('personal')}>Edit</button>}
    </div>
}

export default Generator;