import { useState } from "react"

const Uncontrolled = () => {
    const [values, setValues] = useState<any>({
        firstName: '',
        lastName: '',
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log(values);
        
    }

    const handleChange = (e: any) => {
        const {target: {name, value}} = e;
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" onChange={handleChange} />
            <input type="text" name="lastName" onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default Uncontrolled;