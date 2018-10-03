import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';

import MainPage from './main/MainPage';
import mainTheme from '../constants/mainTheme';
import DetailsPage from './details/DetailsPage';
import CreditsPage from './credits/CreditsPage';

injectGlobal`
    body {
        font-family: Mukta, sans-serif;
        margin: 0;
    }
`;

const App = () => (
    <ThemeProvider theme={mainTheme}>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/movie/:movieId/credits" component={CreditsPage} />
            <Route path="/movie/:movieId" component={DetailsPage} />
        </Switch>
    </ThemeProvider>
);

export default App;