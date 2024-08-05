import { useEffect, useState } from "react";
import { request } from "../../api/requester";
import GameListItem from "./game-list-item/GameListItem";

export default function GameList() {
    const GAMES_URL = 'http://localhost:3030/jsonstore/games/list';
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await request.get(GAMES_URL);
            const result = Object.values(response);
            setGames(result);
        })();
    }, []);

    return (
        <div className="section most-played">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h6>TOP GAMES</h6>
                            <h2>All Games</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* <div className="main-button">
                            <a href="shop.html">View All</a>
                        </div> */}
                    </div>
                    {games.map(game => <GameListItem key={game._id} {...game}/>)}
                </div>
            </div>
        </div>
    );
}