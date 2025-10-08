function PersonalInfoForm({ formData, handleChange, handleSubmit }) {
    return <form onSubmit={handleSubmit}
        className='form-group jusfity-content-center'>
            <label htmlFor="html">Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            <label htmlFor="html">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            <label htmlFor="html">Phone:</label>
            <input type="number" name="phone" value={formData.phone} onChange={handleChange}/>
            <label htmlFor="html">Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
}

export default PersonalInfoForm;