import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import About from './components/about/About';
import Login from './components/login/Login';
import SignUp from './components/sign-up/SignUp';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/game-list' element={<GameList />} />
                {/* <Route path='/game-list/:gameId/details' element={<GameDetails />} /> */}
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;