import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className="hero">
            <article className="hero-description">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favorite websites. Open a new browser tab to see your sites load instantly. Try it for free.</p>                
                <Button text={"Get it on Chrome"}/>
                <Button text={"Get it on Firefox"} backgroundColor={"#999"}></Button>
            </article>
            
            <div className="background-shape"></div>           
            
            <article className="hero-image"></article>
        </section>
    )
}

export default Hero
