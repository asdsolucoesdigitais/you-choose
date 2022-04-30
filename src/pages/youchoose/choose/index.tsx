import Movie from "../movie";
import StyleYouChoose from "./YouChoose.module.scss";
import movies from "../list/movies.json";

export default function Choose() {

    function numberRandom() {
        let num = 0
        while (num === 0) {
            num = Math.floor(Math.random() * 4)
        }
        return num;
    }

    const x = numberRandom();

    const y = numberRandom();

    console.log(x, y);

    return (
        <>
            <div className={StyleYouChoose.box}>
                <button className={StyleYouChoose.box__movie}>
                    <Movie title={movies[x].title} id={movies[x].id} poster={movies[x].poster} score={movies[x].score} />
                </button>
            </div>
            <div className={StyleYouChoose.box}>
                <button className={StyleYouChoose.box__movie}>
                    <Movie title={movies[y].title} id={movies[y].id} poster={movies[y].poster} score={movies[y].score} />
                </button>
            </div>
        </>
    );
}
