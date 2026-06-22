import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
    seed: 'marketing'
});
export default () => {
    return (
        <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/pricing" element={<Pricing />} />
                </Routes>
            </BrowserRouter>
        </StylesProvider>
        </div>
    );
}