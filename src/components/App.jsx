import React from 'react';
import MainPage from './main/MainPage.jsx';
import { Route, Switch } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import mainTheme from '../constants/mainTheme.js';
import DetailsPage from './details/DetailsPage.jsx';

injectGlobal`
    body {
        font-family: 'Mukta', sans-serif;
        margin: 0;
    }
`;

const App = () => (
    <ThemeProvider theme={mainTheme}>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/movie/:movieId" component={DetailsPage} />
        </Switch>
    </ThemeProvider>
);

export default App;