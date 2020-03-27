import React from 'react';
import Article from "./Article";
import Filter from "./Filter";

class Newsfeed extends React.Component {
    render() {
        return (
            <div className="content-container">
                <p className="feed-title" id="feed-title">Your Newsfeed</p>
                <div className="content-view-filter">
                    <div className="content-list" id="content-list">
                        <Article />
                    </div>
                    <Filter />
                </div>
            </div>
        )
    }
}
export default Newsfeed;
