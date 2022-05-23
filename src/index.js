import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './page/Login';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/system";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Frame from './page/Frame';

const theme = createTheme({
    palette: {
        primary: {
            main: `#ea534b`
        }
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/*' element={<Frame />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>

);