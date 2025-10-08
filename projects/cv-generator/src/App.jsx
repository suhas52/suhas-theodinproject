import { useState, useEffect } from 'react'
import Generator from './generator'
import Generated from './generated'
import './App.css'

function App() {
  
  const [generated, setGenerated] = useState({
    personalName: "",
    personalPhone: "",
    personalEmail: "",
    personalAddress: "",
    educationMajor: "",
    educationSchool: "",
    educationGraduated: "",
    experienceCompany: "",
    experiencePosition: "",
    experienceStarted: "",
    experienceEnded: "",
  })
  
  const [isHidden, setIsHidden] = useState({
    personal: false,
    education: false,
    experience: false,
  });
  
  const [personalFormData, setPersonalFormData] = useState({
    personalName: "",
    personalEmail: "",
    personalPhone: "",
    personalAddress: "",
  })
  
  const [educationFormData, setEducationFormData] = useState({
    educationSchool: "",
    educationMajor: "",
    educationStarted: "",
    educationGraduated: "",
  })
  
  const [experienceFormData, setExperienceFormData] = useState({
    experienceCompany: "",
    experiencePosition: "",
    experienceDescription: "",
    experienceStarted: "",
    experienceEnded: "",
  })
  
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name)
    if (name.startsWith("personal")) {
      setPersonalFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    } else if (name.startsWith("education")) {
      
      setEducationFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    } else if (name.startsWith("experience")) {
      setExperienceFormData(prev => ({
        ...prev,
        [name]: value,
      }))
    }
  }
  
  const handleSubmit = (section) => (e) => {
    
    e.preventDefault();
    // const personalData = [personalFormData.personalName, personalFormData.personalEmail, personalFormData.personalPhone, personalFormData.personalAddress];
    // const educationData = [educationFormData.educationSchool, educationFormData.educationMajor, educationFormData.educationStarted, educationFormData.educationGraduated];
    // const experienceData = [experienceFormData.experienceCompany, experienceFormData.experiencePosition, experienceFormData.experienceDescription, experienceFormData.experienceStarted, experienceFormData.experienceEnded]
    setIsHidden(prev => ({ ...prev, [section]: true }));
    const mergedData = {
    ...personalFormData,
    ...educationFormData,
    ...experienceFormData,
  };
  setGenerated(mergedData);

    
  }
  
  const handleEdit = (section) => (e) => {
    e.preventDefault();
    setIsHidden(prev => ({ ...prev, [section]: false}))
  }
  
  return (
    <main>
    <Generator personalFormData={personalFormData} 
    educationFormData={educationFormData}
    experienceFormData={experienceFormData}
    handleEdit={handleEdit}
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    isHidden={isHidden}
    />
    <Generated generated={generated}/>
    </main>
  )
}

export default App
