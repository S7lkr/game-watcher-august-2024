function Comments({
    _ownerId,
    text,
}) {
    return (
        <div className='com-container'>
            <span>{_ownerId}:</span>
            <p>{text}</p>
        </div>
    );
}

export default Comments;