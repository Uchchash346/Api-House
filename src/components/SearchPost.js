import React from 'react';
import './styles/SearchPost.css'

const SearchPost = () => {
    return (
        <>
            <div class="search">
                <form class="search-form">
                    <input type="text" placeholder="Search any post.." />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </>
    );
};

export default SearchPost;