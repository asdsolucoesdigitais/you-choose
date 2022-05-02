import StyleYouChoose from "./YouChoose.module.scss";
import Choose from "./choose";
import Score from "./score";
import Exemplo from "./example";

export default function YouChoose() {
    return (
        <div className={StyleYouChoose.container}>
            
            <Choose />
            <Score />
        </div>
    );
}
