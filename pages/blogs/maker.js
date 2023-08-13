import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/maker.module.css';
import Head from 'next/head';

export default function Maker() {
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState('new');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if(password === "Samik2005") {
            setAuth(true);
        } else {
            alert("Incorrect password. Please try again.");
            setPassword('');
        }
    }

    const fetchData = () => {
        axios.get('/api/blogs').then(res => {
            setBlogs(res.data.blogs);
        });
    }

    useEffect(() => {
        fetchData();
    }, [auth]);

    useEffect(() => {
        if (selectedBlog === 'new') {
            setTitle('');
            setText('');
        } else {
            const blogId = parseInt(selectedBlog);
            const blog = blogs.find(b => b.id === blogId);
            setTitle(blog ? blog.title : '');
            setText(blog ? blog.text : '');
        }
    }, [selectedBlog, blogs]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/blogs', { id: selectedBlog, title, text });
        setSelectedBlog('new');
        fetchData();
    }

    const handleDelete = async () => {
        await axios.delete(`/api/blogs?id=${selectedBlog}`);
        setSelectedBlog('new');
        fetchData();
    }

    return (
        <div className={styles.container}>
            <Head>
              <title>Maker | STEMQuest Dicovery</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="shortcut icon" href="/logo-icon.png" />
            </Head>

            {!auth && (
                <form className={styles.form} onSubmit={handlePasswordSubmit}>
                    <input
                        className={styles.input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                    <button className={styles.button} type="submit">Submit</button>
                </form>
            )}

            {auth && (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <select className={styles.select} value={selectedBlog} onChange={(e) => setSelectedBlog(e.target.value)}>
                        <option value="new">New</option>
                        {blogs.map((blog) => (
                            <option key={blog.id} value={blog.id}>
                                {blog.id}: {blog.title}
                            </option>
                        ))}
                    </select>

                    <input
                        className={styles.input}
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Blog title"
                    />

                    <textarea
                        className={styles.textarea}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Blog text"
                    />

                    <button className={styles.button} type="submit">Submit</button>
                    {selectedBlog !== 'new' && (
                        <button className={styles.button} type="button" onClick={handleDelete}>Delete</button>
                    )}
                </form>
            )}
        </div>
    );
}
