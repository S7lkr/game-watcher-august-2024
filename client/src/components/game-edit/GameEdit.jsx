import { Navigate, useNavigate, useParams } from 'react-router';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../hooks/useForm';
import { useGetOneGames } from '../../hooks/useGames';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

import gamesAPI from '../../api/games-api';
import Home from '../home/Home';
import GameEditConfirmModal from '../GameEditConfirmModal';


export default function GameEdit() {
    const navigate = useNavigate();
    // const { userId, isAuthenticated } = useAuthContext();
    const { gameId } = useParams();
    const [game, setGame] = useGetOneGames(gameId);
    // const [isAuthorized, setIsAuthorized] = useState(false);
    const [showConfirmPanel, setShowConfirmPanel] = useState(false);

    // useEffect(() => {
    //     setIsAuthorized(false);
    //     if (!isAuthenticated) {
    //         navigate('/login');
    //     }
    //     if (userId === game._ownerId) {
    //         setIsAuthorized(true);
    //     }
    // }, [game]);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(
        game,
        async (values) => {
            // console.log(values);
            // const isConfirmed = confirm('Are you sure you want to update this game?');
            // if (isConfirmed) {
            const updatedGame = await gamesAPI.update(gameId, values);
            setGame(updatedGame);
            navigate(`/game-list/${gameId}/details`);
            // }
        });
    const hide = () => {
        setShowConfirmPanel(false);
    }
    const show = () => {
        setShowConfirmPanel(true);
    }

    return (
        <div>
            <div className='login-container'>
                <Form className="login-form">
                    <div>
                        <h3>Edit Game:</h3>
                    </div>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label className='text-field'>Title:</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Enter title..."
                            autoComplete='on'
                            value={values.title}
                            onChange={changeHandler}
                        />
                        <Form.Text className="text-small">
                            Game Title shouldn't be longer than 20 symbols.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="imageUrl">
                        <Form.Label className='text-field'>Avatar:</Form.Label>
                        <Form.Control
                            type="text"
                            name="imageUrl"
                            placeholder="Enter picture URL..."
                            autoComplete='on'
                            value={values.imageUrl}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label className='text-field'>Genre:</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            placeholder="Enter genre..."
                            autoComplete='on'
                            value={values.category}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="type">
                        <Form.Label className='text-field'>Type:</Form.Label>
                        <Form.Control
                            type="text"
                            name="type"
                            placeholder="Enter game type..."
                            autoComplete='on'
                            value={values.type}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="max-level">
                        <Form.Label className='text-field'>Max Level:</Form.Label>
                        <Form.Control
                            type="textarea"
                            name="maxLevel"
                            placeholder="Enter max level..."
                            autoComplete='on'
                            value={values.maxLevel}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="release-year">
                        <Form.Label className='text-field'>Release Year:</Form.Label>
                        <Form.Control
                            type="text"
                            name="releaseYear"
                            placeholder="Enter type..."
                            autoComplete='on'
                            value={values.releaseYear}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <div id="summary">
                        <Form.Label className='text-field'>Description:</Form.Label>
                        <fieldset>
                            <textarea
                                name="summary"
                                id="message"
                                placeholder="Game description..."
                                value={values.summary}
                                onChange={changeHandler}
                            >
                            </textarea>
                        </fieldset>
                    </div>
                    <Button variant="primary" type="button" id='create-game' onClick={() => setShowConfirmPanel(true)}>
                        Edit Game
                    </Button>
                </Form>
            </div>
            {showConfirmPanel && <GameEditConfirmModal hide={hide} submit={submitHandler} gameData={values} />}
        </div>

    );
}