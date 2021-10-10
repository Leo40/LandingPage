import React from 'react'

const Header = () => {
    return (
        <nav className="nav-bar">
            <div>                
                <span className="bookmark">
                <span className="bookmark-icon"></span>
                BOOKMARK</span>
            </div>
            <article className="nav-bar-items">
                <button>FEATURES</button>
                <button>PRICING</button>
                <button>CONTACT</button>
                <button>LOGIN</button>
            </article>
            <div></div>
        </nav>
    )
}

export default Header
