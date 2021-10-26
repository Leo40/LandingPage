import React from 'react'

const FeatureTab = ({ name, }) => {
    return (
        <article className={`simple-bookmarking ${showTabOne && `current-tab`}`}>                        
            <article className="features-shape"></article>
            <article className="features-tab-1-image"></article>
            <article className="description-tab-1">
                <Title text={"Bookmark in one click"} />
                <p>This is a description tab.</p>
                <Button text={"More Info"} />
            </article>
        </article>
    )
}

export default FeatureTab