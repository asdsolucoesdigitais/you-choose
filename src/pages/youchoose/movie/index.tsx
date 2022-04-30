import StyleYouChoose from "./YouChoose.module.scss";
import movies from "../list/movies.json";

type Props = typeof movies[0];

export default function Movie(props: Props) {

    const { id, poster, title } = props;

    return (
        <div className={StyleYouChoose.box__movie__poster}>
            <img className={StyleYouChoose.box__movie__poster} key={id} src={poster} alt={title} />
        </div>
    )
}