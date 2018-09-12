import React from 'react';
import MainPage from './main/MainPage.jsx';
import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { injectGlobal, ThemeProvider } from 'styled-components';
import mainTheme from '../constants/mainTheme.js';

injectGlobal`
    body {
        font-family: 'Mukta', sans-serif;
    }
`;

const App = () => (
    <ThemeProvider theme={mainTheme}>
        <Switch>
            <Route exact path="/" component={MainPage} />
        </Switch>
    </ThemeProvider>
);

export default App;