import { useState } from "react";
import { useParams } from "react-router";
import { useGetOneGames } from "../../hooks/useGames";
import Comments from "../comments/Comments";
import commentsAPI from "../../api/comments-api";

export default function GameDetails() {
    const { gameId } = useParams();
    const [game, setGame] = useGetOneGames(gameId);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const commentSubmitHandler = async (e) => {
        e.preventDefault();
        if (username == '' || comment == '') {
            return;
        }
        const newComment = await commentsAPI.create(gameId, username, comment);
        
        setGame(oldState => ({
            ...oldState,
            comments: {
                ...oldState.comments,
                [newComment._id]: newComment,
            }
        }));
        
        setUsername('');
        setComment('');     // clean up both inputs
    }

    return (
        <div className="single-product section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-image">
                            <img src={game.imageUrl} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <h4>{game.title}</h4>
                        <span>{game.category}</span>
                        <hr style={{ color: 'white' }} />
                        <p>{game.summary}</p>
                        <hr style={{ color: 'white' }} />
                        <ul>
                            <li><p>Game Type: {game.gameType}</p></li>
                            <li><p>Max Level: {game.maxLevel}</p></li>
                            <li><p>Release Year: {game.releaseYear}</p></li>
                        </ul>
                        <hr style={{ color: 'white' }} />
                        <div className="buttons details">
                            <button><i className="fa fa-pen-to-square"></i> Edit</button>
                            <button><i className="fa fa-trash-can"></i> Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <section id="comments-section">
                <h4>Comments:</h4>
                {Object.keys(game.comments || {}).length > 0
                    ? Object.values(game.comments).map(comment => <Comments key={comment._id} {...comment}/>)
                    : <h5>--No comments yet--</h5>
                }
            </section>

            <div id="add-comment-section">
                <h2>Add new comment</h2>
                <form id="contact-form" action="" method="post" onSubmit={commentSubmitHandler}>
                    <div className="row">
                        <div className="col-lg-6">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username..."
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                        </div>
                        <div className="col-lg-12">
                            <fieldset>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Comment something..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                >
                                </textarea>
                            </fieldset>
                        </div>
                        <div className="col-lg-12">
                            <fieldset className="buttons comments">
                                <button type="submit" id="form-submit" className="orange-button">Add Comment</button>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}