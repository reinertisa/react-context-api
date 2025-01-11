import {useState} from 'react';

export default function NewSongForm({onSave}) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    const handleAuthor = (evt) => setAuthor(evt.target.value);

    const handleTitle = (evt) => setTitle(evt.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        onSave(title, author);
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="author">Author name</label>
            <input id="author" type="text" value={author} onChange={handleAuthor} />

            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={title} onChange={handleTitle} />

            <button type="submit">Save</button>
        </form>
    )
}