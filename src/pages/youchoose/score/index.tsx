import Item from "./list/item";
import StyleScore from "./Score.module.scss";

export default function Score() {

    return (
        <div className={StyleScore.box_score}>
            <div className={StyleScore.score}>
                <Item />
            </div>
        </div>
    )
}