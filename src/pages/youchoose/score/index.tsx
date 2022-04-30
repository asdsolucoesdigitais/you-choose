import StyleScore from "./Score.module.scss";

export default function Score() {

    return (
        <div className={StyleScore.box_score}>
            <div className={StyleScore.score}>Score</div>
        </div>
    )
}