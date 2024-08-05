function Comments({
    username,
    text,
}) {
    return (
        <>
            <div className='com-container'>
                <span>{username}:</span>
                <p>{text}</p>
            </div>
        </>
    );
}

export default Comments;