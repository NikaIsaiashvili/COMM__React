function Input({id, label, placeholder, onChange}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" placeholder={placeholder}onChange={onChange}></input>
        </>
    )
}

export default Input;