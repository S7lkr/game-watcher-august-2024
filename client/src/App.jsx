import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";   // custom Provider

import { PrivateGuard, PublicGuard } from "./components/common/RouteGuards";
import NavBar from "./components/nav-bar/NavBar";
import Home from './components/home/Home';
import GameList from './components/game-list/GameList';
import About from './components/about/About';
import ContactUs from "./components/about-contact-us/ContactUs";
import OurTeam from "./components/about-our-team/OurTeam";
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameDetails from './components/game-details/GameDetails';
import GameCreate from "./components/game-create/GameCreate";
import Logout from "./components/logout/Logout";
import GameEdit from "./components/game-edit/GameEdit";
import Services from "./components/about-services/Services";


// App role: Layoutin & Routes
function App() {
    return (
        <AuthContextProvider>
            <NavBar />
            <Routes>
                {/* I. Public Part (accessible without authentication) */}
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}>
                    <Route path="contact-us" element={<ContactUs />} />
                    <Route path="team" element={<OurTeam />} />
                    <Route path="services" element={<Services />} />
                </Route>
                <Route path='/game-list' element={<GameList />} />
                <Route path='/game-list/:gameId/details' element={<GameDetails />} />

                <Route element={<PublicGuard />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>

                {/* II. Private Part (accessible ONLY for registered users) */}
                <Route element={<PrivateGuard />}>
                    <Route path='/game-list/create' element={<GameCreate />} />
                    <Route path='/game-list/:gameId/edit' element={<GameEdit />} />
                    <Route path='/logout' element={<Logout />} />
                </Route>
            </Routes>
        </AuthContextProvider>
    );
}

export default App;