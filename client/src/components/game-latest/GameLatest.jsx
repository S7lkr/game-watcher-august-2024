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
                    {/* <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="/images/trending-02.jpg" alt="" /></a>
                                <span className="price">$44</span>
                            </div>
                            <div className="down-content">
                                <span className="category">Action</span>
                                <h4>Assasin Creed</h4>
                                <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="/images/trending-03.jpg" alt="" /></a>
                                <span className="price"><em>$64</em>$44</span>
                            </div>
                            <div className="down-content">
                                <span className="category">Action</span>
                                <h4>Assasin Creed</h4>
                                <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="/images/trending-04.jpg" alt="" /></a>
                                <span className="price">$32</span>
                            </div>
                            <div className="down-content">
                                <span className="category">Action</span>
                                <h4>Assasin Creed</h4>
                                <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}