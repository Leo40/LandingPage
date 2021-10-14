import React from 'react';
import Button from './Button';
import Title from './Title';

const Extensions = () => {
    return (
        <section className="extensions">
            <article className="extensions-description">
                <Title text={"Download the extension"} />
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio at veritatis autem fuga, quisquam a!</article>

                <article className="logos">
                    <article className="chrome-logo-card">
                        <section className="chrome-logo"></section>
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <Button text={"Add and Install Extension"} />
                    </article>

                    <article className="firefox-logo-card">
                        <section className="firefox-logo"></section>
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <Button text={"Add and Install Extension"} />
                    </article>

                    <article className="opera-logo-card"> 
                        <section className="opera-logo"></section>                       
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <Button text={"Add and Install Extension"} />
                    </article>
                </article>
                
            </article>
        </section>
    )
}

export default Extensions
