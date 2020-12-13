import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from '../components';
import { URLS } from '../consts';
import { MainPage } from './main-page';
import { Page1 } from './page1';
import { Page2 } from './page2';

export const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path={URLS.page1} component={Page1} />
                    <Route path={URLS.page2} component={Page2} />
                    <Route path="/" component={MainPage} />
                </Switch>
            </Layout>
        </Router>
    );
};
