import {PlayPauseButton} from "./component/PlayPauseButton"
import {Display} from "./component/Display"
import {PointScoredButton} from "./component/PointScoredButton";
import {ResetButton} from "./component/ResetButton";

function App() {
    return (
        <div>
            <Display/>
            <div className={"buttons-row"}>
                <PointScoredButton playerId={"player1"}>Point joueur 1</PointScoredButton>
                <PointScoredButton playerId={"player2"}>Point joueur 2</PointScoredButton>
            </div>
            <div className={"buttons-row"}>
                <ResetButton/>
                <PlayPauseButton/>
            </div>
        </div>
    )
}

export default App
