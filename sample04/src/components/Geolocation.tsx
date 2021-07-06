import { FC } from "react";

type Props = {
    latitude: number | null;
    longitude: number | null
}

const Geolocation: FC<Props> = ({latitude, longitude}) => {
    return (
        <>
            <p>Latitud: {latitude}</p>
            <p>Longitud: {longitude}</p>
        </>
    )
}

export default Geolocation;