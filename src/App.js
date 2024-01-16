import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Board from './components/Board/Board';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Input from './components/Input/Input';

function App() {

  const [board, setBoard] = useState('')
  const [boards, setBoards] = useState(['Todo', 'In Progress', 'Done', 'Backlog'])
  const [isAdd, setIsAdd] = useState(false)

  const [listCards, setListCards] = useState([
    [{
      name: 'Login view form',
      active: [1]
    },
    {
      name: 'Implement Landing Page',
      active: [1]
    }],
    [{
      name: 'Landing Page hero block',
      active: [2, 3]
    }, {
      name: 'Landing Page footer',
      active: [2, 3]
    }, {
      name: 'Project setup documentation',
      active: [4]
    }],
    [{
      name: 'Registration view form',
      active: [1]
    }, {
      name: 'Setup staging server',
      active: [5]
    }],
    [{
      name: 'Email verification gives 500',
      active: [6]
    }, {
      name: 'Prepare runners for Continuous Integration',
      active: [5]
    }, {
      name: 'Search Bar',
      active: [1]
    }]
  ])

  const handleAddBoard = () => {
    if (boards.length >= 4) {
      setListCards(prev => [...prev, []])
    }
    setBoards(prev => [...prev, board])
    setBoard('')
    setIsAdd(false)
  }

  const handleCancel = () => {
    setIsAdd(false)
  }

  const handleChange = e => {
    setBoard(e.target.value)
  }

  return (
    <div className="App">
      {boards.map((board, index) => (
        <Board board={board} key={index} lists={listCards[index]} />
      ))}

      <div className='new-board'>
        <span
          style={{ margin: '0 5px 0 0' }}
          onClick={() => {
            setIsAdd(true)
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          <p>Add Board</p>
        </span>
        <br></br>
        {
          isAdd && (
            <Input
              handleAdd={handleAddBoard}
              handleCancel={handleCancel}
              handleChange={handleChange}
              placeholder='Enter board...'
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
