import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Relatorio from '../Componentes/relatorio';
import Upload from '../Componentes/Upload';


function AppRoute() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="relatorio" element={<Relatorio />} />
                    <Route path="upload" element={<Upload />} />
                    <Route path='*' element={<h1>Página não encontrada</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default AppRoute


