import { Suspense } from "react";

import AppRoute from "./AppRoute";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import Menu from "./components/menu";
import routes from "./config/routes";

function App() {
  return (
    // Esperar a que termine la carga de los componentes hijos
    <Suspense fallback="Loading...">
      <Router>
        <Menu />
        <Switch>
          {/* Iterar por reglas de navegacion */}
          {routes.map((route) => (
            <AppRoute
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
