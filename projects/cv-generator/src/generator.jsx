import { useState } from 'react';
import PersonalInfoForm from './personal_info_form'
import EducationInfoForm from './education_info_form';
import ExperienceInfoForm from './experience_info_form'


function Generator( { personalFormData,educationFormData, experienceFormData, handleEdit, handleSubmit, handleChange, isHidden,  } ) {
    
    
    
    

    
    return <div
    className="user-info-container"
    >
    {!isHidden.personal ? <PersonalInfoForm personalFormData={personalFormData} 
    handleChange={handleChange} 
    handleSubmit={handleSubmit('personal')}/> : <button onClick={handleEdit('personal')}>Edit</button>}
    
    {!isHidden.education ? <EducationInfoForm educationFormData={educationFormData} 
    handleChange={handleChange} 
    handleSubmit={handleSubmit('education')}/> : <button onClick={handleEdit('education')}>Edit</button>}

    {!isHidden.experience ? <ExperienceInfoForm experienceFormData={experienceFormData} 
    handleChange={handleChange} 
    handleSubmit={handleSubmit('experience')}/> : <button onClick={handleEdit('experience')}>Edit</button>}

    </div>

    

}

export default Generator;