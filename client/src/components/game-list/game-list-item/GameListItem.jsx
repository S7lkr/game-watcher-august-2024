export default function GameListItem({
    title,
    category,
    imageUrl,
}) {
    return (
        <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="item">
                <div className="thumb">
                    <a href="product-details.html"><img src={imageUrl} alt="" /></a>
                </div>
                <div className="down-content" >
                    <span className="category">{category}</span>
                    <h4>{title}</h4>
                    <a href="product-details.html">Details</a>
                </div>
            </div>
        </div>
    );
}