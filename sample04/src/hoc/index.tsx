import {FC} from 'react'
import withInnerWidth from './WithInnerWidth'

type Props = {
    innerWidth: number
}

const MyComponent: FC<Props> = ({innerWidth}) => {
    return (
        <div>
            <p>innerWidth: {innerWidth}</p>
        </div>
    )
}

export default withInnerWidth(MyComponent);