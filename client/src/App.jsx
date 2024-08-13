import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";   // custom Provider

import NavBar from "./components/nav-bar/NavBar";
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import About from './components/about/About';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GameDetails';
import GameCreate from "./components/game-create/GameCreate";
import Logout from "./components/logout/Logout";
import GameEdit from "./components/game-edit/GameEdit";

// App role: Layoutin & Routes
function App() {
    return (
        <AuthContextProvider>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                {/* TODO: About subroutes */}
                <Route path='/game-list' element={<GameList />} />
                <Route path='/game-list/:gameId/details' element={<GameDetails />} />
                <Route path='/game-list/:gameId/edit' element={<GameEdit />} />
                <Route path='/create-game' element={<GameCreate />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </AuthContextProvider>
    );
}

export default App;