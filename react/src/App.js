import React from 'react'
import theme from 'theme'
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from 'store';
import routes from './routes'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'layout';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            {routes.map(item => <Route {...item} />)}
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    )
}

export default App
