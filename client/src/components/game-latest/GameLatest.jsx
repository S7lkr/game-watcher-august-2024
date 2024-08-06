import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { request } from "../../api/requester";
import gamesAPI from "../../api/games-api";
import GameLatestItem from "./game-latest-item/GameLatestItem";

export default function MostPlayed() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            // TODO: Modify to fetch only latest games
            const response = await gamesAPI.getAll();
            const games = Object.values(response).reverse().slice(0, 4);    // take only LAST 4 games (newest)
            setGames(games);
        })();
    }, []);

    return (
        <div className="section trending">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h6>Catch up with our...</h6>
                            <h2>Latest Games</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="main-button">
                            <Link to="/game-list">View All</Link>
                        </div>
                    </div>
                    {games.length > 0
                        ? games.map(game => <GameLatestItem key={game._id} {...game} />)
                        : (
                            <div className="section-heading">
                                <h2 style={{ textAlign: 'center' }}>--No games yet--</h2>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}