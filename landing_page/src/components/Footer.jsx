import React from 'react'
import Button from './Button'

const Footer = () => {
    return (
        <section className="footer">
            <section className="footer-cta">
                <span>35,000+ ALREADY JOINED</span>
                <h1>Stay up-to-date with what we're doing</h1>                                
            </section>
            <input type="text" placeholder="Enter your email address"/>
            <Button text={"Contact Us"} backgroundColor={"hsl(0, 94%, 66%)"}></Button>
        </section>
    )
}

export default Footer
