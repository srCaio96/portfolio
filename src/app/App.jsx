import React from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import DivisionLanguages from '../components/divisionLanguages/DivisionLanguages';
import Projects from '../components/projects/projects';
import DivisionDevices from '../components/divisionDevices/DivisionDevices';
import Footer from '../components/footer/Footer';

export default function App() {
    return (
        <>
            <Header />
            <Main />
            <DivisionLanguages />
            <Projects />
            <DivisionDevices />
            <Footer />
        </>
    )
};