function PersonalInfoForm({ personalFormData, handleChange, handleSubmit }) {
    return <form onSubmit={handleSubmit}>
            <label htmlFor="html">Name:</label>
            <input type="text" name="personalName" value={personalFormData.personalName} onChange={handleChange}/>
            <label htmlFor="html">Email:</label>
            <input type="email" name="personalEmail" value={personalFormData.personalEmail} onChange={handleChange}/>
            <label htmlFor="html">Phone:</label>
            <input type="number" name="personalPhone" value={personalFormData.personalPhone} onChange={handleChange}/>
            <label htmlFor="html">Address:</label>
            <input type="text" name="personalAddress" value={personalFormData.personalAddress} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
}

export default PersonalInfoForm;