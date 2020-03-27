import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo" onClick="app.router.goTo('app/refresh')">
                    <div className="circle">T</div>
                    <span>TReX</span>
                </div>
                <div className="mobile-buttons mobile">
                    <i className="fas fa-search" onClick="showSearch()"></i>
                    <i className="fas fa-bars" onClick="showMenu()"></i>
                </div>
                <label id="mobile-search" className="search">
                    <input placeholder="Search reports and help" className="sign-up-input" id="search-input"
                           onKeyPress="return search(event)" />
                        <i className="far fa-times-circle" onClick="closeSearch()"></i>
                </label>
                <div className="user">
                    <div className="circle">
                        <p id="header-logo">H</p>
                    </div>
                    <a className="name" id="header-username">Turcu Stefanel</a>
                    <button className="button-log-out" onClick="logout()"><i className="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            </header>
        )
    }
}
export default Header;
