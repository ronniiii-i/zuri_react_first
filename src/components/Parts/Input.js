import React from 'react'

function Input({ text, name, type, placeholder, value }) {
    return (
        <>
            <label htmlFor={name}>{text}</label>
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
            />
        </>
    )
}

export default Input
