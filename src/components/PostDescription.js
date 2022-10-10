import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/PostDescription.css';
import userImage from './images/profile.png'

const PostDescription = () => {
    // const { id } = useParams();
    const location = useLocation();
    console.log(location)
    return (
        <div className='post-description-area'>
            {/* <h1>{location.state.id}</h1>
                <p>{location.state.title}</p> */}

            <div class="blog_post">
                <div class="img_pod">
                    <img src={userImage} alt="random image" />
                </div>
                <div class="container_copy">
                    <h3>{new Date().toISOString().slice(0, 10)}</h3>
                    <h1>{location.state.id}. {location.state.title}</h1>
                    <p>{location.state.body}</p>
                    <a class="btn_primary" href='/'>Go to Home</a>
                </div>

            </div>
        </div>
    );
};

export default PostDescription;