const Button = () => {
    const handleClick = (se: any) => {
        console.log("🚀 ~ file: index.tsx ~ line 3 ~ handleClick ~ se", se)
        console.log("🚀 ~ file: index.tsx ~ line 3 ~ handleClick ~ se.nativeEvent", se.nativeEvent)
    
        console.log("🚀 ~ file: index.tsx ~ line 7 ~ handleClick ~ se.nativeEvent instanceof", se instanceof MouseEvent )
        console.log("🚀 ~ file: index.tsx ~ line 7 ~ handleClick ~ se.nativeEvent instanceof", se.nativeEvent instanceof MouseEvent )
    }

    return (
       <button onClick={handleClick}>Click me!</button>
    )
}


const ButtonSingleHandler = () => {
    const handleEvent = (se: any) => {
        switch(se.type) {
            case 'click':
                console.log('CLICK!');
                break;
            case 'dblclick':
                console.log('DOUBLE CLICK!');
                break;
            default:
                console.log('UNHANDLED ==> ', se.type)
                break;       
        }
    }

    return (
       <button onClick={handleEvent} onDoubleClick={handleEvent}>Click me!</button>
    )
}

export { Button, ButtonSingleHandler }