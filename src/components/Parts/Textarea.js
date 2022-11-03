import React from 'react'

function Textarea({ text, name, placeholder }) {
    return (
        <>
            <label htmlFor={name}>{text}</label>
            <textarea id={name} placeholder={placeholder}></textarea>
        </>
    )
}

export default Textarea
