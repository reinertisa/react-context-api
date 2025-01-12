import {useContext} from 'react';

import {SongContext} from "../contexts/SongContext";
import {ThemeContext} from "../contexts/ThemeContext";
import SongDetails from "./SongDetails";

export default function SongList() {
    const {songs} = useContext(SongContext);
    const {isLightTheme, dark, light} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className="song-list" style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {songs.map((song) => <SongDetails song={song} key={song.id} />)}
            </ul>
        </div>
    )
}