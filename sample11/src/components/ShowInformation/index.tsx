import { useState, ChangeEvent } from "react";

const ShowInformation = () => {
    const [state, setState] = useState({ name: "", age: 0, show: false });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setState({
            ...state,
            [name]: value
        })
    }

    const handleClick = () => {
        setState({
            ...state,
            show: true
        })
    }

    if (state.show) {
        return (
            <div className="ShowInformation">
                <h2>Personal Information</h2>

                <div className="PersonalInformation">
                    <p>
                        <strong>Name: {state.name}</strong>
                    </p>
                    <p>
                        <strong>Age: {state.age}</strong>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="ShowInformation">
            <h2>Personal Information</h2>

            <div className="PersonalInformation">
                <p>
                    <strong>Name: </strong>
                </p>
                <p>
                    <input type="text" name="name" value={state.name} onChange={handleChange} />
                </p>
                <p>
                    <strong>Age: </strong>
                </p>
                <p>
                    <input type="text" name="age" value={state.age} onChange={handleChange} />
                </p>
                <button onClick={handleClick}>Show Information</button>
            </div>
        </div>
    );
};

export default ShowInformation;
