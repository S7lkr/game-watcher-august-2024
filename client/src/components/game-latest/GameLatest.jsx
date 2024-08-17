import { Link } from "react-router-dom";
import GameLatestItem from "./game-latest-item/GameLatestItem";
import { useGetLastGames } from "../../hooks/useGames";
import Preloader from "../preloader/Preloader";


export default function MostPlayed() {
    const [games, isFetch] = useGetLastGames(3);
    return (isFetch
        ? <Preloader />
        : <div className="section trending">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h6>Catch up with our...</h6>
                            <h2>Latest Games</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div id="view-all-button">
                            <button><Link to="/game-list">View All</Link></button>
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