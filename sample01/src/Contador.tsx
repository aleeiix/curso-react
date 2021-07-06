import React, {useState} from 'react'

const Contador = () => {
    const [contador, setContador] = useState<number>(0)

    const gestionContador = (operacion: string = 'añadir') => {
        if (operacion === 'añadir') {
            return setContador(contador + 1)
        }

        return setContador(contador - 1)
    }

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={() => gestionContador('añadir')}>Añadir</button>
            <button onClick={() => gestionContador('quitar')}>Quitar</button>
        </>
    )
}

export default Contador;