import StyleChoose from "./Choose.module.scss";
import movies from "assets/movies.json";
import Movie from "../movie";
import { useState } from "react";

export default function Choose() {

    const [movieId, getClick] = useState(0);

    function numberRandom() {
        let num = 0;
        while (num === 0) {
            num = Math.floor(Math.random() * Object.keys(movies).length);
        }
        return num;
    }

    function arrayNumberRandom() {
        let x = 0;
        let y = 0;

        while (x === y) {
            x = numberRandom();
            y = numberRandom();
        }
        return [x, y];
    }

    const moviesId = arrayNumberRandom();

    const a = moviesId[0];

    const b = moviesId[1];

    return (
        <>
            {console.log(movieId)}
            <div className={StyleChoose.box_choose}>
                <div onClick={() => getClick(movies[a].id)}>
                    <Movie
                        title={movies[a].title}
                        id={movies[a].id}
                        poster={movies[a].poster}
                        score={movies[a].score}
                        votes={movies[a].votes}
                    />
                </div>
                <div onClick={() => getClick(movies[b].id)}>
                    <Movie
                        title={movies[b].title}
                        id={movies[b].id}
                        poster={movies[b].poster}
                        score={movies[b].score}
                        votes={movies[b].votes}
                    />
                </div>
            </div>
        </>
    );
}
