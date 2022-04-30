import StyleChoose from "./Choose.module.scss";
import movies from "assets/movies.json";
import Movie from "../movie";

export default function Choose() {
    function numberRandom() {
        let num = 0;
        while (num === 0) {
            num = Math.floor(Math.random() * Object.keys(movies).length);
        }
        return num;
    }

    function getClick(id: number) {
        return console.log(id);
    }

    function numbersRandom() {
        let x = 0;
        let y = 0;

        while (x === y) {
            x = numberRandom();
            y = numberRandom();
        }
        return [x, y];
    }

    const moviesId = numbersRandom();

    const a = moviesId[0];

    const b = moviesId[1];

    console.log(a, b);

    return (
        <>
            <div className={StyleChoose.box_choose}>
                <div onClick={() => getClick(movies[a].id)}>
                    <Movie
                        title={movies[a].title}
                        id={movies[a].id}
                        poster={movies[a].poster}
                        score={movies[a].score}
                        votes={movies[b].votes}
                    />
                </div>
                <div onClick={() => getClick(movies[b].id)}>
                    <Movie
                        /*onClick={() => getClick(movies[b].id)}*/
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
