import { Link, useParams } from "react-router-dom";

export default function GameLatestItem({
    _id,
    title,
    category,
    imageUrl,
}) {
    const {gameId} = useParams();

    return (
        <div className="col-lg-3 col-md-6">
            <div className="item">
                <div className="thumb">
                    <Link to="#"><img src={imageUrl} alt="" /></Link>
                </div>
                <div className="down-content">
                    <span className="category">{category}</span>
                    <h4>{title}</h4>
                    <Link to={`/game-list/${_id}/details`}><i className="fa fa-info"></i></Link>
                </div>
            </div>
        </div>
    );
}