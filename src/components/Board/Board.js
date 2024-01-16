import React, { useState } from 'react'
import Card from '../Card/Card'
import '../Board/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'
import Input from '../Input/Input'

function Board({ board, lists }) {
    const list = lists.map((li) => (li.name))
    const act = lists.map((ac) => (ac.active))

    const [card, setCard] = useState('')
    const [cards, setCards] = useState(list)
    const [actives, setActives] = useState(act)
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(-1)
    const [newCard, setNewCard] = useState('')

    const handleCancel = () => {
        setIsAdd(false)
        setIsEdit(-1)
    }

    const handleAddCard = (event) => {
        event.preventDefault();
        setCards(prev => [...prev, card])
        setCard('')
        setNewCard('')
        setIsAdd(false)

        // Access the selected checkboxes using the state
        const selectedChoices = Object.keys(checkedItems).filter(
            (id) => checkedItems[id]
        );

        setActives(prev => [...prev, selectedChoices])
        setCheckedItems({})
    }

    const handleEditCard = () => {
        const newCards = [...cards]
        newCards[isEdit] = newCard
        setCards(newCards)
        setIsEdit(-1)
        setNewCard('')
    }

    const handleOnClickEditCard = (index) => {
        setIsEdit(index)
    }

    const handleDeleteCard = (index) => {
        const newCards = [...cards]
        const newActives = [...actives]
        newCards.splice(index, 1)
        newActives.splice(index, 1)
        setCards(newCards)
        setActives(newActives)
    }

    const handleChange = e => {
        setCard(e.target.value)
        setNewCard(e.target.value)
    }

    // State to manage the checked status of checkboxes
    const [checkedItems, setCheckedItems] = useState({});

    // Function to handle checkbox changes
    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [id]: checked,
        }));
    };


    return (
        <div className='board'>
            <div className='header'>
                <p className='board-name'>{board}</p>
                <span className='card-number'>{cards.length}</span>
                <span style={{ right: '0' }}><FontAwesomeIcon icon={faBars} /></span>
            </div>

            <div>
                {cards.map((card, index) => (
                    <div key={index}>
                        <Card
                            card={isEdit === index ? newCard : card}
                            key={index}
                            handleDelete={() => handleDeleteCard(index)}
                            handleClick={() => handleOnClickEditCard(index)}
                            actives={actives[index]}
                        />

                        {isEdit === index &&
                            <Input
                                handleCancel={handleCancel}
                                handleChange={handleChange}
                                handleAdd={handleEditCard}
                                placeholder='Update card...'
                            />
                        }
                    </div>
                ))}
            </div>

            <div
                className='add-card-btn'
                onClick={() => {
                    setIsAdd(true)
                }}>
                <span style={{ margin: '0 5px 0 0' }}><FontAwesomeIcon icon={faPlus} /></span>
                Add Card
            </div>
            <br></br>
            {
                isAdd && (
                    <div>
                        <Input
                            handleAdd={handleAddCard}
                            handleCancel={handleCancel}
                            handleChange={handleChange}
                            placeholder='Enter card...'
                        />
                        <div className='choice'>
                            <label>
                                <input
                                    type="checkbox"
                                    id={1}
                                    checked={checkedItems[1] || false}
                                    onChange={handleCheckboxChange}
                                />
                                Enhancement
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    id={2}
                                    checked={checkedItems[2] || false}
                                    onChange={handleCheckboxChange}
                                />
                                Need Review
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    id={3}
                                    checked={checkedItems[3] || false}
                                    onChange={handleCheckboxChange}
                                />
                                Design
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    id={4}
                                    checked={checkedItems[4] || false}
                                    onChange={handleCheckboxChange}
                                />
                                Docs
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    id={5}
                                    checked={checkedItems[5] || false}
                                    onChange={handleCheckboxChange}
                                />
                                DevOp
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    id={6}
                                    checked={checkedItems[6] || false}
                                    onChange={handleCheckboxChange}
                                />
                                Bug
                            </label>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Board