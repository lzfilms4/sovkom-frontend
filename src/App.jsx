import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import PersonsList from "./components/personsList/PersonsList";
import React from "react";
import Testing from "./components/Testing/Testing";
import Tests from "./components/Tests/Tests";
import AddUser from "./components/addUser/AddUser";

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<PersonsList />} />
                    <Route path="personsList" element={<PersonsList />} />
                    <Route path="/personsList/:id" element={<Dashboard />} />
                    <Route path="addUser" element={<AddUser />} />

                    <Route path="Testing" element={<Testing />} />
                    <Route path="Tests/:id" element={<Tests />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="stats" element={<Blank />} />

                </Route>

            </Routes>
        </BrowserRouter>

    )
}

export default App
