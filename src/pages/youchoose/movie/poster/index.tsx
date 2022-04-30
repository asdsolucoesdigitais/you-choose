import StylePoster from "./Poster.module.scss";

interface Props {
    poster: string;
    title: string;
    id: string;
    votes: number;
}

export default function Poster(props: Props) {
    const { id, poster } = props;

    const myStyle = {
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    };

    return (
        <div id={id} style={myStyle} className={StylePoster.poster} />
    );
}
