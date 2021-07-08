import { useState } from "react"

const Controlled = () => {
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
            <input type="text" name="firstName" value={values.firstName} onChange={handleChange} />
            <input type="text" name="lastName" value={values.lastName} onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default Controlled;