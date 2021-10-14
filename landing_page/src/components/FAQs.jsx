import React from 'react';
import Button from './Button';
import Title from './Title';

const FAQs = () => {
    return (
        <section className="faqs">
            <article className="faqs-description">
                <Title text={"Frequently Asked Questions"} />
                <p>Here are some of our FAQs. If you have any other questions you'd like answered, please feel free to email us.</p>                
            </article>

            <article className="questions">
                <div className="question"> 
                    <p>What is Bookmark?<i className="arrow"></i></p>
                </div>
                <div className="question">
                    <p>How can I request a new browser?<i className="arrow"></i></p>
                </div>
                <div className="question">
                    <p>Is there a mobile app?<i className="arrow"></i></p>
                </div>
                <div className="question">
                    <p>What about other Chromium browsers?<i className="arrow"></i></p>
                </div>
            </article>
            <Button text={"More Info"} />
        </section>
    )
}

export default FAQs
