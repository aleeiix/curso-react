import { Route } from "react-router-dom"

// Componente para configuracion de reglas de navegacion
export default function AppRoute({
    component: Component,
    path,
    isPrivate,
    ...props
}) {
    return (
        <Route
            path={path} render={props => isPrivate ?
                (<div>No tienes permisos</div>) :
                (<Component {...props} />)}
            {...props}
        />
    )
}