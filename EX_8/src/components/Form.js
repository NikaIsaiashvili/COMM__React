import useState, {useState} from "react";
import Input from "./Input";

function Form({onSubmit}) {
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    submitValue = () => {
        const listDetails = {
            firstName : fName,
            lastName : lName,
            email,
            city
        }
        onSubmit(listDetails);
    }    

    return (
        <div className="container">
            <Input id="name" placeholder="Enter your name..." label="Name" onChange={e => setFname(e.target.value)} />
            <Input id="lastname" placeholder="Enter your lastname..." label="Lastname" onChange={e => setLname(e.target.value)} />
            <Input id="email" placeholder="Enter your email..." label="Email" onChange={e => setEmail(e.target.value)} />
            <Input id="city" placeholder="Enter your city..." label="City" onChange={e => setCity(e.target.value)} />
            <button className="button" onClick={submitValue}>Add</button>
        </div>
    )
}

export default Form;
