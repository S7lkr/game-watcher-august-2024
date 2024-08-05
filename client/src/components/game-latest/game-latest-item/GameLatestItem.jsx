export default function GameLatestItem({
    title,
    category,
    imageUrl,
}) {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="item">
                <div className="thumb">
                    <a href="product-details.html"><img src={imageUrl} alt="" /></a>
                </div>
                <div className="down-content">
                    <span className="category">{category}</span>
                    <h4>{title}</h4>
                    <a href="product-details.html"><i className="fa fa-info"></i></a>
                </div>
            </div>
        </div>
    );
}