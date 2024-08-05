import { Link, useParams } from "react-router-dom";

export default function GameListItem({
    _id,
    title,
    category,
    imageUrl,
}) {
    const { gameId } = useParams();
    return (
        <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
                <div className="thumb">
                    <Link to="#"><img src={imageUrl} alt="" /></Link>
                </div>
                <div className="down-content" >
                    <span className="category">{category}</span>
                    <h4>{title}</h4>
                    <Link to={`/game-list/${gameId}/details`}>Details</Link>
                </div>
            </div>
        </div>
    );
}