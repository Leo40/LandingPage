import React from 'react';
import { useState } from 'react';

const Features = () => {

    const [showTabOne, setShowTabOne] = useState(false);
    const [showTabTwo, setShowTabTwo] = useState(false);
    const [showTabThree, setShowTabThree] = useState(false);

    const handleShow = () => {
        setShow(true)
    }

    return (
        <div>
            <section className="features">
                <article className="features-description">
                    <h1>Features</h1>
                    <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </article>

                <section className="features-tabs">

                    <nav className="features-tabs-bar">
                        <button onClick>Simple Bookmarking</button>
                        <button>Speedy Searching</button>
                        <button>Easy Sharing</button>
                    </nav>

                    <article className="simple-bookmarking" onClick={handleShow}>
                        
                        <div className="features-tab-1-shape"></div>
                        
                        <article className="features-tab-1-image"></article>
                    </article>

                </section>



            </section>


        </div>
    )
}

export default Features
