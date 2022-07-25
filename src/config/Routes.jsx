import React from 'react';
import { Routes as WrapRouter, Route } from 'react-router-dom';

import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
import Detail from '../pages/detail/Detail';

const Routes = () => {
    return (
        <WrapRouter>
            <Route path="/:catalogy/search/:keyword" element={<Catalog />} />
            <Route path="/:catalogy/:id" element={<Detail />} />
            <Route path="/:catalogy" element={<Catalog />} />
            <Route exact path="/" element={<Home />} />
        </WrapRouter>
    );
};

export default Routes;
