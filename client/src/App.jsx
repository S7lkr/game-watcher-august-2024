import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/nav-bar/NavBar";
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GameDetails';
import { AuthContext } from "./contexts/AuthContext";

function App() {
    // TODO: remove this from app
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {     // wrapper func -> to secure 'setAuthState'
        setAuthState(state);
    };
    const contextData = {
        userId: authState._id,
        email: authState.email,
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
                {/* <Route path='/game-create' element={<CreateGame />} /> */}
                <Route path='/game-list' element={<GameList />} />
                <Route path='/game-list/:gameId/details' element={<GameDetails />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;