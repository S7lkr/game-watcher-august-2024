import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import About from './components/about/About';
import Login from './components/login/Login';
import SignUp from './components/sign-up/SignUp';
import GameDetails from './components/game-details/GameDetails';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {
    // TODO: remove this from app
    const [authState, setAuthState] = useState({});
    const changeAuthState = (state) => {    // wrap func
        setAuthState(state);
    }
    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        // if truthy value -> true, if falsy (false, 0, -0, 0n, "", null, undefined, NaN, document.all) -> false
        isAuthenticated: !!authState.email,
        changeAuthState,
    }
    return (
        <AuthContext.Provider value={contextData}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/game-create' element={<CreateGame />} /> */}
                <Route path='/game-list' element={<GameList />} />
                <Route path='/game-list/:gameId/details' element={<GameDetails />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;