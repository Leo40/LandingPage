import React from 'react';
import Button from './Button';

const FAQs = () => {
    const questions = ["What is Bookmark?", "How can I request a new browser?", "Is there a mobile app?", "What about other Chromium browsers?"]
    return (
        <section className="faqs">
            <article className="faqs-description">
                <h1>Frequently Asked Questions</h1>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered, please feel free to email us.</p>                
            </article>

            <article className="questions">
                {questions.map((question)=>{
                   return <div className="question"> 
                        <p>{question}<i className="arrow"></i></p>
                    </div> 
                })}
            </article>
            <Button text={"More Info"} />
        </section>
    )
}

export default FAQs
