import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchPost from './SearchPost';
import './styles/PostCard.css';

const PostCard = () => {
    const [posts, setPosts] = useState(null);
    const [postLoading, setPostLoading] = useState(12);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPosts(data)
            })
    }, [])



    return (
        <div className='post-card-area'>
                <SearchPost />
            <div className="container">
                {
                    posts && posts.slice(0, postLoading).map((post) => {
                        const { id, title, body } = post;
                        return (
                            <div className="card" key={post.id}>
                                <div>
                                    <div className="card__body">
                                        <span className="tag tag-blue">User ID: {post.id}</span>
                                        <h4>{post.title}</h4>
                                        <p>{post.body}</p>
                                    </div>
                                    <div className="card__footer">
                                        <Link to={title}
                                            state={{ id, title, body }}
                                            className='button see-more-button'>See More</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <br />
            </div>
            <button
                onClick={() => {
                    setPostLoading(posts.length)
                }}
                className="load-button load-more-button">Load More</button>
        </div>
    );
};

export default PostCard;