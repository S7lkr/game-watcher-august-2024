import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import { AuthContext } from "./contexts/AuthContext";
import NavBar from "./components/nav-bar/NavBar";
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GameDetails';
import GameCreate from "./components/game-create/GameCreate";

// REMEMBER: Data-chain is: COMPONENTS --> HOOKS --> API --> REQUESTER
//                              ^                                 |
//                              |   data               data       V
//                              -----------HOOKS <---------------API
function App() {
    // TODO: remove this from app
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {     // wrapper func -> to protect 'setAuthState' func
        // TODO: Quick solution -> fix by implementing persisted authState
        localStorage.setItem('accessToken', state.accessToken); // now the 'requester' will have access to the Token
        setAuthState(state);
    };
    const contextData = {
        userId: authState._id,
        email: authState.email,
        username: authState.username,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,     // if falsy -> false, if truty -> true
        changeAuthState,
    };
    return (
        //                     Give 'contextData' to all components (bordered by Provider)
        //                              v
        <AuthContext.Provider value={contextData}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                {/* TODO: About subroutes */}
                <Route path='/game-list' element={<GameList />} />
                <Route path='/game-list/:gameId/details' element={<GameDetails />} />
                <Route path='/create-game' element={<GameCreate />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Navigate to='/' />} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;