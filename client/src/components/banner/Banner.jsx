export default function Banner() {
    return (
        <div className="main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="caption header-text">
                            <h6>Welcome to GameWatcher</h6>
                            <h2>BEST GAMING SITE EVER!</h2>
                            <p>In GameWatcher Gaming Website you will find AWESOME games
                                from all genre and type to ENJOY in your free time!</p>
                            {/* <div className="search-input">
                            <form id="search" action="#">
                                <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword"
                                    onkeypress="handle" />
                                <button role="button">Search Now</button>
                            </form>
                        </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2">
                        <div className="right-image">
                            <img src="/images/single-game.jpg" alt="" />
                            {/* <span className="price">$22</span> */}
                            {/* <span className="offer">-40%</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}