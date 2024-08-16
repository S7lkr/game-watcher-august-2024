import { useNavigate } from "react-router";

import { useForm } from "../../hooks/useForm";
import gamesAPI from "../../api/games-api";
import { useState } from "react";

const initialValues = {title: ''};

export default function Banner() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(
        initialValues,                      // initial values
        async ({ title }) => {              // 'submitCallBack' func
            try {
                const game = await gamesAPI.search(title);
                navigate(`/game-list/${game._id}/details`);
            } catch (err) {
                setError('Game not found! Please enter the EXACT game title!');
                setTimeout(() => {setError('')}, 4000);
                console.log(err.message);
            }
        });

    return (
        <div className="main-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="caption header-text">
                            <h6>Welcome to GameWatcher</h6>
                            <h2>BEST GAMING SITE EVER!</h2>
                            <p>In GameWatcher Gaming Website you will find AWESOME games
                                from all genre and type to ENJOY in your free time!</p>
                            <div className="search-input">
                                <form id="search" action="#" onSubmit={submitHandler}>
                                    <input
                                        type="text"
                                        placeholder="Enter game..."
                                        id='searchText'
                                        name="title"
                                        value={values.title}
                                        onChange={changeHandler}
                                    />
                                    <button role="button">Search Game</button>
                                </form>
                                {error && <span style={{backgroundColor: "#000", color: "red", fontSize: "small", marginLeft: "1em"}}>{error}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-2">
                        <div className="right-image">
                            <img src="/images/single-game.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}