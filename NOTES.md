# FORMACION REACT

## Comandos
* npm install -g create-react-app // Esto ya no se recomienda mejor usar npx
* npx create-react-app sample01 --template typescript
* npm view react version
* npm view react-script version
* npm install -D eslint-plugin-react-hooks
* npm install axios
* npm install -D @types/axios
* npm install react-router-dom
* npm install -D @types/react-router-dom
* npm install react-addons-css-transition-group 
* npm install -D @types/react-addons-css-transition-group
* npm install --save react-motion @types/react-motion
* npm install styled-components
* npm install -D @types/styled-components
* npm install redux
* npm install -D @types/redux
* npm install react-redux
* npm install -D @types/react-redux
* npm install redux-thunk
* npm install -D @types/redux-thunk

## Links
* https://github.com/facebook/create-react-app
* https://reactrouter.com/

## Testing
Scripts:
```
"test": "react-scripts test",
"coverage": "react-scripts test --coverage --watchAll",
```

Metodos:
```
describe, it, test, expect
```

import {render, screen} from '@testing-library/react';

const header = screen.getByRole('heading', {name: /travel anywhere/i});
screen.debug(header);