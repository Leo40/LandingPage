import React from 'react';
import { useState } from 'react';
import Button from './Button';

const Features = () => {
    const tabs = [
        {
            name: "simple-bookmarking",
            title: "Bookmark in one click",
        },
        {
            name: "speedy-searching",
            title: "Intelligent search",
        },
        {
            name: "easy-sharing",
            title: "Share your bookmarks",
        }
    ];
    
    const [currentTab, setCurrentTab] = useState("tab-one");

    const handleShow = (text) => {
        if(text === "Simple Bookmarking"){
            setCurrentTab("tab-one");
        }
        else if(text === "Speedy Searching"){
            setCurrentTab("tab-two");
        }
        else if (text === "Easy Sharing"){        
            setCurrentTab("tab-three");
        }
    }

    return (
        <div>
            <section className="features">
                <article className="features-description">
                    <p>Features</p>
                    <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </article>

                <section className="features-tabs">
                    <nav className="features-tabs-bar">
                        <button className={`tab-one ${currentTab === `tab-one`? `show-tab` : ''}`} onClick={() => {handleShow("Simple Bookmarking")}}>Simple Bookmarking</button>
                        <button className={`tab-two ${currentTab === `tab-two`? `show-tab` : ''}`} onClick={() => {handleShow("Speedy Searching")}}>Speedy Searching</button>
                        <button className={`tab-three ${currentTab === `tab-three`? `show-tab` : ''}`} onClick={() => {handleShow("Easy Sharing")}}>Easy Sharing</button>
                    </nav>

                    {tabs.map((tab, index) => {
                        return (
                            <article className={`${tab.name} ${currentTab}`}>                        
                                <article className="features-shape"></article>
                                <article className={`features-tab-${index + 1}-image`}></article>
                                <article className={`description-tab-${index + 1}`}>
                                    <p>{tab.title}</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque molestias pariatur dolore odit? Asperiores.</p>
                                    <Button text={"More Info"} />
                                </article>
                            </article>                            
                        )
                    })}
                </section>
            </section>
        </div>
    )
}

export default Features
