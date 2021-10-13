import React from 'react'

const Button = ({text, color, backgroundColor}) => {
    return (
        <button style={{backgroundColor: `${backgroundColor}`, color: `${color}`}}>{text}</button>
    )
}

export default Button
