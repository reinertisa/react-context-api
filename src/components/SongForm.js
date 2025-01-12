import {useState, useContext} from 'react';
import {SongContext} from "../contexts/SongContext";

export default function NewSongForm() {
    const {addSong} = useContext(SongContext);
    const [singer, setSinger] = useState('');
    const [title, setTitle] = useState('');

    const handleSinger = (evt) => setSinger(evt.target.value);

    const handleTitle = (evt) => setTitle(evt.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        addSong(title, singer)
        setTitle('');
        setSinger('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="singer">Singer name</label>
            <input
                id="singer"
                type="text"
                value={singer}
                onChange={handleSinger}
                required={true}
            />

            <label htmlFor="title">Title</label>
            <input
                id="title"
                type="text"
                value={title}
                onChange={handleTitle}
                required={true}
            />

            <button type="submit">Save</button>
        </form>
    )
}