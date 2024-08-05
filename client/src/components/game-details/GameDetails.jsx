export default function GameDetails({
    _id,
    title,
    imageUrl,
    category,
    gameType,
    releaseYear,
    maxLevel,
}) {
    return (
        <div className="single-product section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-image">
                            <img src="/images/single-game.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <h4>Call of Duty®: Modern Warfare® II</h4>
                        <span>Genre: </span>
                        <hr style={{ color: 'white' }} />
                        <p>Game description.....</p>
                        <hr style={{ color: 'white' }} />
                        <ul>
                            <li><span>Type: </span></li>
                            <li><span>Max Level: </span></li>
                            <li><span>Release Year: </span></li>
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