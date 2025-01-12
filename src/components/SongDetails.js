import {useContext} from "react";
import {SongContext} from "../contexts/SongContext";
import {ThemeContext} from "../contexts/ThemeContext";


export default function SongDetails({song}) {
    const {removeSong} = useContext(SongContext);
    const {isLightTheme, dark, light} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <li style={{background: theme.ui}} onClick={() => removeSong(song.id)}>
            <div className="title">{song.title}</div>
            <div className="singer">{song.singer}</div>
        </li>
    )

}