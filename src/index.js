import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import store from './store';
import App from './App';
import { fetchInterceptor } from './fetchInterceptor';


fetchInterceptor();
// const palette = {
//     primary: { main: '#616161' },
//     secondary: { main: '#9E9E9E' }
// };
// const themeName = 'Dark horse';
// const theme = createMuiTheme({ palette, themeName });

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={createMuiTheme()}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
