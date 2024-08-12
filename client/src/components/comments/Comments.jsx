function Comments({ comment }) {
    return (
        <div className='com-container'>
            <span>{comment.author.email}:</span>
            <p>{comment.text}</p>
        </div>
    );
}

export default Comments;