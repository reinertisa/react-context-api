import {createContext, useState} from 'react';
import {v4 as uuid} from 'uuid';

export const SongContext = createContext();

export default function SongContextProvider(props) {

    const [songs, setSongs] = useState([
        {id: 1, title: 'Save your tears', singer: 'Ariana Grande'},
        {id: 2, title: 'Hands clean', singer: 'Michael Jackson'},
        {id: 3, title: 'Bonita', singer: 'Madonna'}
    ]);

    const addSong = (title, singer) => setSongs([...songs, {title, singer, id: uuid()}])
    const removeSong = (id) => setSongs(songs.filter(song => song.id !== id));

    return (
        <SongContext.Provider value={{songs, addSong, removeSong}}>
            {props.children}
        </SongContext.Provider>
    )
}