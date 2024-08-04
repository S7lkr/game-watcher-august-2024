import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import MostPlayed from './components/most-played/MostPlayed';
import Banner from './components/banner/Banner';

function App() {
    return (
        <>
            <Header />
            <Banner />
            <MostPlayed />
        </>
    );
}

export default App;