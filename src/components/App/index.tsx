import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import './app.pcss';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <>1</> } />
                <Route path="switch" element={ <>2</> } />
                <Route path="clone" element={ <>3</> } />
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
        </BrowserRouter>
    );
}
