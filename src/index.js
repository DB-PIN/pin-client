import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './page/Auth';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/system";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Frame from './page/Frame';
import path from "./resource/Path";

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
                <Route path={path.routing.auth} element={<Auth />} />
                <Route path={path.routing.frame} element={<Frame />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>

);