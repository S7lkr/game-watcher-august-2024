import { useState, useEffect } from "react";
import { request } from "../../api/requester";
import { Link } from "react-router-dom";
import GameLatestItem from "./game-latest-item/GameLatestItem";

export default function MostPlayed() {
    const GAMES_URL = 'http://localhost:3030/jsonstore/games/list';
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await request.get(GAMES_URL);
            const result = Object.values(response).reverse().slice(0, 4);
            setGames(result);
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
                    {games.map(game => <GameLatestItem key={game._id} {...game} />)}
                </div>
            </div>
        </div>
    );
}