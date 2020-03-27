import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div className="filters-container">
                <div className="filters-padded-container">
                    <div className="filters-container-title">Filter</div>
                    <div className="populaity-slider-container">
                        <p className="filter-subtitle">Popularity</p>
                        <div className="popularity-slider-value">
                            <p className="popularity-filter-score" id="popularity-filter-score">78</p>
                            <div className="popularity-slider-container">
                                <input type="range" min="1" max="100000" value="78" className="popularity-slider"
                                       id="popularity-slider" onChange="updateFilter(this.value)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Filter;
