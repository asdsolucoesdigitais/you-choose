import movies from "assets/movies.json";
import Poster from "./poster";

type IProps = typeof movies[0];

export default function Movie(props: IProps) {

    const { id, poster, title, votes } = props;

    return (
        <Poster id={id.toString()} poster={poster} title={title} votes={votes} />
    )
}