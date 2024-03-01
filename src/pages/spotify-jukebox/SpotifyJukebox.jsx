import {PlaybackButton} from "../../components/buttons/PlaybackButton.jsx";
import "./styles/spotify-jukebox.scss"
import {useState} from "react";
import {TrackTime} from "../../components/buttons/TrackTime.jsx";
export default function SpotifyJukebox () {

    const [playState, setPlayState] = useState("play")

    const handlePlayClick = () => {
        if (playState === "play") {
            setPlayState("pause")
        } else {
            setPlayState("play")
        }
    }

    return(
        <>
        <div className="jukebox">
            <div className={"playback"}>
                <PlaybackButton
                    color={'white'}
                    buttonType="previous"
                />
                <PlaybackButton
                    color={'white'}
                    buttonType={playState}
                    onClick={handlePlayClick}
                />
                <PlaybackButton
                    color={'white'}
                    buttonType="next"
                />
            </div>
            <TrackTime
                totalTime={"05:50"}
                leftTime={"01:53"}
            />
        </div>

    </>
    )
}