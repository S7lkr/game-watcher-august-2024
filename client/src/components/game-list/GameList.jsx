import { request } from "../../api/requester";

export default function GameList() {
    return (
        <div className="section most-played">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h6>TOP GAMES</h6>
                            <h2>List of All Games</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="main-button">
                            <a href="shop.html">View All</a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="/images/top-game-01.jpg" alt="" /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">Adventure</span>
                                <h4>Assasin Creed</h4>
                                <a href="product-details.html">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="/images/top-game-02.jpg" alt="" /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">Adventure</span>
                                <h4>Assasin Creed</h4>
                                <a href="product-details.html">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="/images/top-game-03.jpg" alt="" /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">Adventure</span>
                                <h4>Assasin Creed</h4>
                                <a href="product-details.html">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="/images/top-game-04.jpg" alt="" /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">Adventure</span>
                                <h4>Assasin Creed</h4>
                                <a href="product-details.html">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="/images/top-game-05.jpg" alt="" /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">Adventure</span>
                                <h4>Assasin Creed</h4>
                                <a href="product-details.html">Explore</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="item">
                            <div className="thumb">
                                <a href="product-details.html"><img src="/images/top-game-06.jpg" alt="" /></a>
                            </div>
                            <div className="down-content">
                                <span className="category">Adventure</span>
                                <h4>Assasin Creed</h4>
                                <a href="product-details.html">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}