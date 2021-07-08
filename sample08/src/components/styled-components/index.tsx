import styled from 'styled-components';
// import { FC } from 'react';

// interface Props {
//     color: string;
// }

// const StyledButton: FC<Props> = ({children, color}) => {
//     const Button = styled.button`
//     background-color: red;
//     color: ${color};
//     width: 300px;
//     padding: 20px;
//     &:hover {
//         color: white;
//     }
    
//     @media (max-width: 480px) {
//         background-color: blue;
//         width: 160px;
//     }
//     `

//     return <Button>{children}</Button>
// }

const StyledButton = styled.button`
    background-color: red;
    width: 300px;
    padding: 20px;
    &:hover {
        color: white;
    }
    
    @media (max-width: 480px) {
        background-color: blue;
        width: 160px;
    }
`

export default StyledButton;