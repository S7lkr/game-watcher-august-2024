function Comments({ comment }) {
    console.log(comment.text);

    return (
        <div className='com-container'>
            <span>{comment.author.email}:</span>
            <p>{comment.text}</p>
        </div>
    );
}

export default Comments;