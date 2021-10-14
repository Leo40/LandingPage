import React from 'react';
import { useState } from 'react';
import Button from './Button';
import Title from './Title';

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
                    <Title text={"Features"} />
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
                            <Title text={"Bookmark in one click"} />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque molestias pariatur dolore odit? Asperiores.</p>
                            <Button text={"More Info"} />
                        </article>
                    </article>

                    <article className={`speedy-searching ${showTabTwo && `current-tab`}`}>                        
                        <article className="features-shape"></article>                        
                        <article className="features-tab-2-image"></article>
                        <article className="description-tab-2">
                            <Title text={"Intelligent search"} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit voluptate illo vero voluptatibus perferendis!</p>
                            <Button text={"More Info"} />
                        </article>
                    </article>

                    <article className={`easy-sharing ${showTabThree && `current-tab`}`}>                        
                        <article className="features-shape"></article>                        
                        <article className="features-tab-3-image"></article>
                        <article className="description-tab-3">
                            <Title text={"Share your bookmarks"} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde sit dignissimos omnis, minus fugiat.</p>
                            <Button text={"More Info"} />
                        </article>
                    </article>

                </section>

            </section>

        </div>
    )
}

export default Features
