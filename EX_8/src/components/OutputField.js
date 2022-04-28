function OutputField({formData}) {
    return (
        <div className="results">
            {formData.map((data) => (
                <div className="list-item">
                   <p>{data.firstName}</p> <br/>
                   <p>{data.lastName}</p> <br/>
                   <p>{data.email}</p> <br/>
                   <p>{data.city}</p> <br/>
                </div>
            ))}
        </div>
    )
}


export default OutputField;