function ExperienceInfoForm( {experienceFormData, handleSubmit, handleChange }) {
    return <form onSubmit={handleSubmit}>
        <label>Company:</label>
        <input name="experienceCompany" type="text" value={experienceFormData.experienceCompany} onChange={handleChange}/>
        <label>Position:</label>
        <input name="experiencePosition" type="text" value={experienceFormData.experiencePosition} onChange={handleChange}/>
        <label>Description:</label>
        <input name="experienceDescription" type="text" value={experienceFormData.experienceDescription} onChange={handleChange}/>
        <label>Started:</label>
        <input name="experienceStarted" type="date" value={experienceFormData.experienceStarted} onChange={handleChange}/>
        <label>Ended:</label>
        <input name="experienceEnded" type="date" value={experienceFormData.experienceEnded} onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form>
}

export default ExperienceInfoForm;