import { Switch, Route } from 'react-router-dom';

import App from './App';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Contacts from './components/contacts';
import Error from './components/error';

const AppRoutes = () => (
    <App>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/contacts" component={Contacts} exact/>
            <Route path="/contacts/:id" component={Contacts} />
            <Route component={Error} />
        </Switch>
    </App>
)

export default AppRoutes;