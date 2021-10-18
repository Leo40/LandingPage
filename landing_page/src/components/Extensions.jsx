import React from 'react';
import Button from './Button';

const Extensions = () => {    
    const logos = ["chrome", "firefox", "opera"]

    return (
        <section className="extensions">
            <article className="extensions-description">
                <h1>Download the extension</h1>
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio at veritatis autem fuga, quisquam a!</article>

                <article className="logos">
                    {logos.map((logo) => {
                        return(
                            <article className={`${logo}-logo-card`}>
                                <section className={`${logo}-logo`}></section>
                                <h3>Add to {logo}</h3>
                                <p>Minimum version 62</p>
                                <Button text={"Add and Install Extension"} />
                            </article>
                        )                        
                    })}
                </article>
                
            </article>
        </section>
    )
}

export default Extensions
