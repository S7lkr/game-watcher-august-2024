import GameListItem from "./game-list-item/GameListItem";
import { useGetAllGames } from "../../hooks/useGames";

export default function GameList() {
    const [games] = useGetAllGames();   // this state uses the custom hook 'useGetAllGames' from 'useGames.js'

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
                        <div className="main-button">
                            <button>Refresh Games</button>
                        </div>
                    </div>
                    {games.length > 0
                        ? games.map(game => <GameListItem key={game._id} {...game} />)
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