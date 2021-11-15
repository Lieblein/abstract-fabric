import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { FABRIC, SWITCH, CLONE } from '../../constants/routes';
import Layout from '../Layout';
import './app.pcss';

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={ FABRIC } element={ <>1</> } />
                    <Route path={ SWITCH } element={ <>2</> } />
                    <Route path={ CLONE } element={ <>3</> } />
                    <Route
                        path="*"
                        element={
                            <main>
                                <h1>404</h1>
                                <p>Здесь не на что смотреть</p>
                            </main>
                        }
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
