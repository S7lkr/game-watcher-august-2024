import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import MostPlayed from './components/home/most-played/MostPlayed';
import Banner from './components/home/banner/Banner';
import Home from './components/home/Home';

function App() {
    return (
        <>
            <Header />
        </>
    );
}

export default App;