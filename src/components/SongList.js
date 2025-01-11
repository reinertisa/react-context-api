import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import NewSongForm from "./SongForm";

export default function SongList() {

    const [songs, setSongs] = useState([
        {id: 1, title: 'let me kiss you', artist: 'Morrisey'},
        {id: 2, title: 'save your tears', artist: 'The Weekend'},
        {id: 3, title: 'ironic', artist: 'Alanis Morissette'},
    ]);

    const addSong = (title, artist) => setSongs([...songs, {title, artist, id: uuid()}]);

    return (
        <div className="song-list">
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        <div className="title">{song.title}</div>
                        <div className="artist">{song.artist}</div>
                    </li>
                ))}
            </ul>
            <NewSongForm onSave={addSong} />
        </div>
    )
}