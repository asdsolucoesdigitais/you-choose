import StyleYouChoose from "./YouChoose.module.scss";
import Choose from "./choose";
import Score from "./score";

export default function YouChoose() {
    return (
        <div className={StyleYouChoose.container}>
            <Choose />
            <Score />
        </div>
    );
}
