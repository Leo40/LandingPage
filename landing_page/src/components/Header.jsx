import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <nav className="nav-bar">
            <div>                
                <span className="bookmark">
                <span className="bookmark-icon"></span>
                BOOKMARK</span>
            </div>
            <article className="nav-bar-items">
                <Button text={'FEATURES'} color={'black'}/>
                <Button text={'PRICING'} color={'black'}/>
                <Button text={'CONTACT'} color={'black'}/>
                <Button text={'LOGIN'} color={'black'}/>
            </article>
            <div></div>
        </nav>
    )
}

export default Header
