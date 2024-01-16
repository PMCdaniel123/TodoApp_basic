import { faBug, faPalette, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../Card/style.css'

function Card({ card, handleDelete, handleClick, actives }) {

    return (
        <div className='card'>
            <div className='main'>
                <p onClick={handleClick}>{card}</p>
                <span
                    style={{ marginLeft: '5px' }}
                    onClick={handleDelete}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </span>

            </div>
            <div className='type'>
                {actives.map((active, index) => (
                    <div key={index}>
                        {(active === 1 || active === '1') && <span className='enhancement'>Enhancement</span>}
                        {(active === 2 || active === '2') && <span className='review'>Needs Review</span>}
                        {(active === 3 || active === '3') && <span className='design'>Design <FontAwesomeIcon icon={faPalette} /></span>}
                        {(active === 4 || active === '4') && <span className='docs'>Docs</span>}
                        {(active === 5 || active === '5') && <span className='dev'>DevOps</span>}
                        {(active === 6 || active === '6') && <span className='bug'>Bug <FontAwesomeIcon icon={faBug} /></span>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card