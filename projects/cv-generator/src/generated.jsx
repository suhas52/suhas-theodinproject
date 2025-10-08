import { useState } from 'react';


function Generated( {generated} ) {
    
    return <div
    className="generated-cv"
    >
    <div className='cv-container'>
    <div className='personal-info'>
    <h2>{generated.personalName}</h2>
    <p><span>{generated.personalPhone}</span>|<span>{generated.personalAddress}</span></p>
    <p>Email: {generated.personalEmail}</p>
    </div>
    <div className='education-info'>
    <h2>Education</h2>
    <p>Major: {generated.educationMajor}</p>
    <p>University: {generated.educationSchool}</p>
    <p>Expected Graduation: {generated.educationGraduated}</p>
    </div>
    <div className='experience-info'>
    <h2>Experience</h2>
    <p>Company: {generated.experienceCompany}</p>
    <p>Position: {generated.experiencePosition}</p>
    <p>Description: {generated.experienceDescription}</p>
    <p>Started: {generated.experienceStarted}</p>
    <p>Ended: {generated.experienceEnded}</p>
    </div>
    </div>        
    </div>
    
}

export default Generated;