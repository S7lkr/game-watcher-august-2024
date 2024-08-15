import { useNavigate } from "react-router";

import { useForm } from "../../hooks/useForm";
import gamesAPI from "../../api/games-api";

const initialValues = {title: ''};

export default function Banner() {
    const navigate = useNavigate();
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(
        initialValues,                      // initial values
        async ({ title }) => {              // 'submitCallBack' func
            const game = await gamesAPI.search(title);
            navigate(`/game-list/${game._id}/details`);
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