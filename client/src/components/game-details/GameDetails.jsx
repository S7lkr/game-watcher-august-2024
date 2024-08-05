import { useEffect, useState } from "react";
import gamesAPI from "../../api/games-api";
import { useParams } from "react-router";

export default function GameDetails({
    _id,
    title,
    imageUrl,
    summary,
    category,
    gameType,
    releaseYear,
    maxLevel,
}) {
    const [game, setGame] = useState({});
    const { gameId } = useParams();

    // make request to fetch the game by _id
    useEffect(() => {
        (async () => {
            const response = await gamesAPI.getOne(gameId);
            setGame(response);
        })();
    }, []);

    return (
        <div className="single-product section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-image">
                            <img src={game.imageUrl} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <h4>{game.title}</h4>
                        <span>{game.category}</span>
                        <hr style={{ color: 'white' }} />
                        <p>{game.summary}</p>
                        <hr style={{ color: 'white' }} />
                        <ul>
                            <li><p>Game Type: {game.gameType}</p></li>
                            <li><p>Max Level: {game.maxLevel}</p></li>
                            <li><p>Release Year: {game.releaseYear}</p></li>
                        </ul>
                        <hr style={{ color: 'white' }} />
                        <div className="buttons">
                            <button><i className="fa fa-pen-to-square"></i> Edit</button>
                            <button><i className="fa fa-trash-can"></i> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}