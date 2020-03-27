import React from 'react';

class Article extends React.Component {
    render() {
        return (
            <div className="article">
                <div className="article-header">
                    <div className="article-title" id="article-title">Articol bomba despre .NET</div>
                    <div className="popularity-score" id="popularity-score">7.1/10 popularity</div>
                </div>
                <div className="article-content" id="article-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit ullamcorper
                    lorem, id suscipit ante placerat at. Nullam eu ex vitae nulla condimentum pellentesque quis
                    sit
                    amet orci. Nulla vitae est sodales, efficitur metus rutrum, sodales libero. Proin urna
                    justo,
                    luctus vitae sapien sed, feugiat euismod leo. Proin lorem nibh, faucibus non elementum et,
                    pharetra eu nibh. Vestibulum volutpat accumsan dui non ultricies. Proin porttitor rhoncus
                    mollis. Morbi interdum lectus enim. Proin at mollis mi. Cras egestas gravida justo nec
                    congue. [
                    … ]
                </div>
                <div className="article-footer">
                    <div className="tag-list"></div>
                    <a onClick="" className="read-more-link">Read More</a>
                </div>
            </div>
        )
    }
}
export default Article;
