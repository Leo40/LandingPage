import React from 'react';
import { useState } from 'react';
import Button from './Button';

const Features = () => {

    const [showTabOne, setShowTabOne] = useState(true);
    const [showTabTwo, setShowTabTwo] = useState(false);
    const [showTabThree, setShowTabThree] = useState(false);

    const handleShow = (text) => {
        if(text === "Simple Bookmarking"){
            setShowTabOne(true);
            setShowTabTwo(false);
            setShowTabThree(false);
        }
        else if(text === "Speedy Searching"){
            setShowTabOne(false);
            setShowTabTwo(true);
            setShowTabThree(false);
        }
        else if (text === "Easy Sharing"){        
            setShowTabOne(false);
            setShowTabTwo(false);
            setShowTabThree(true);
        }
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
                        <button className={`tab-one ${showTabOne && `active-tab`}`} onClick={() => {handleShow("Simple Bookmarking")}}>Simple Bookmarking</button>
                        <button className={`tab-two ${showTabTwo && `active-tab`}`} onClick={() => {handleShow("Speedy Searching")}}>Speedy Searching</button>
                        <button className={`tab-three ${showTabThree && `active-tab`}`} onClick={() => {handleShow("Easy Sharing")}}>Easy Sharing</button>
                    </nav>

                    <article className={`simple-bookmarking ${showTabOne && `current-tab`}`}>                        
                        <article className="features-shape"></article>
                        <article className="features-tab-1-image"></article>
                        <article className="description-tab-1">
                            <h1>Bookmark in one click</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque molestias pariatur dolore odit? Asperiores.</p>
                            <Button text={"More Info"}></Button>
                        </article>
                    </article>

                    <article className={`speedy-searching ${showTabTwo && `current-tab`}`}>                        
                        <article className="features-shape"></article>                        
                        <article className="features-tab-2-image"></article>
                        <article className="description-tab-2">
                            <h1>Intelligent search</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit voluptate illo vero voluptatibus perferendis!</p>
                            <Button text={"More Info"}></Button>
                        </article>
                    </article>

                    <article className={`easy-sharing ${showTabThree && `current-tab`}`}>                        
                        <article className="features-shape"></article>                        
                        <article className="features-tab-3-image"></article>
                        <article className="description-tab-3">
                            <h1>Share your bookmarks</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde sit dignissimos omnis, minus fugiat.</p>
                            <Button text={"More Info"}></Button>
                        </article>
                    </article>

                </section>

            </section>

        </div>
    )
}

export default Features
