import React from 'react'
import '../Input/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Input({ handleAdd, handleCancel, handleChange, placeholder, value }) {

    return (
        <div className='input'>
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className='input-text'
            />
            <span
                style={{ marginLeft: '10px' }}
                onClick={handleAdd}
            >
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#63E6BE" }} size='xl' />
            </span>
            <span
                style={{ marginLeft: '10px' }}
                onClick={handleCancel}
            >
                <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#e66565" }} size='xl' />
            </span>
        </div>
    )
}

export default Input