function EducationInfoForm( {educationFormData, handleSubmit, handleChange} ) {
    return <form onSubmit={handleSubmit}>
        <label>School:</label>
        <input name="educationSchool" type="text" value={educationFormData.educationSchool} onChange={handleChange}/>
        <label>Major:</label>
        <input name="educationMajor" type="text" value={educationFormData.educationMajor} onChange={handleChange}/>
        <label>Started:</label>
        <input name="educationStarted" type="date" value={educationFormData.educationStarted} onChange={handleChange}/>
        <label>Graduted:</label>
        <input name="educationGraduated" type="date" value={educationFormData.educationGraduated} onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form>
}

export default EducationInfoForm;