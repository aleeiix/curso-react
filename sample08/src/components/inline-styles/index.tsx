import {useState, ChangeEvent} from 'react'

const FontSize = () => {
    const [value, setValue] = useState<number>(16);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(evt.target.value))
    }

    return (
        <input type="number" value={value} onChange={handleChange} style={{fontSize: value}} />
    )
}

export default FontSize