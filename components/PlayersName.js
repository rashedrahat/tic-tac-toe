import React, {useRef, useState} from 'react';
import SimpleReactValidator from 'simple-react-validator';

const PlayersName = ({proceedToPlay}) => {
    const [X, setX] = useState('')
    const [O, setO] = useState('')

    const simpleValidator = useRef(new SimpleReactValidator())
    const [, forceUpdate] = useState();

    const handleChange = (e) => {
        if (e.target.name === 'X') {
            setX(e.target.value)
        } else {
            setO(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (simpleValidator.current.allValid()) {
            proceedToPlay({X, O})
        } else {
            simpleValidator.current.showMessages();
            forceUpdate(1)
        }
    }

    return (
        <form>
            <div className="inputBox">
                <input type="text" value={X} onChange={handleChange} name="X" autoComplete="off"/>
                <label htmlFor="">Name as X <span>{simpleValidator.current.message('X', X, 'required')}</span></label>
            </div>
            <div className="inputBox">
                <input type="text" value={O} onChange={handleChange} name="O" autoComplete="off"/>
                <label htmlFor="">Name as O <span>{simpleValidator.current.message('O', O, 'required')}</span></label>
            </div>
            <button type="submit" onClick={handleSubmit}>Play</button>
        </form>
    )
}

export default PlayersName;
