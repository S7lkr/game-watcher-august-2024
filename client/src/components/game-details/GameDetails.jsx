import { useParams } from "react-router";

import { useGetOneGames } from "../../hooks/useGames";
import { useForm } from "../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import { useAuthContext } from "../../contexts/AuthContext";
import Comments from "../comments/Comments";

const initialvalues = {
    comment: '',
}

export default function GameDetails() {
    const { gameId } = useParams();
    const [game] = useGetOneGames(gameId);
    const [comments, dispatch] = useGetAllComments(gameId);
    const createComment = useCreateComment();
    const { isAuthenticated, email, userId } = useAuthContext();
    const isOwner = userId === game._ownerId;
    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(
        initialvalues,
        async (values) => {
            try {
                const newComment = await createComment(gameId, values.comment);
                // setComments(prevComments => [...prevComments, newComment]);
                dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } });
            } catch (err) {
                console.log(err.message);
            }
        });

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
                        {isOwner && (
                            <div className="buttons details">
                                <hr style={{ color: 'white' }} />
                                <button><i className="fa fa-pen-to-square"></i> Edit</button>
                                <button><i className="fa fa-trash-can"></i> Delete</button>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>

            <section id="comments-section">
                <h4>Comments:</h4>
                {comments?.length > 0
                    ? comments.map(comment => <Comments key={comment._id} comment={comment} />)
                    : <h5>--No comments yet--</h5>
                }
            </section>
            {isAuthenticated && (
                <div id="add-comment-section">
                    <h2>Add new comment</h2>

                    <form id="contact-form" action="" method="post" onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col-lg-12">
                                <fieldset>
                                    <textarea
                                        name="comment"
                                        id="comment"
                                        placeholder="Comment something..."
                                        value={values.comment}
                                        onChange={changeHandler}
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
            )}
        </div>
    );
}