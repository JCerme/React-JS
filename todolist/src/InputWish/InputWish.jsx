import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const InputWish = ({ onNewWish }) =>{
    const [newWish, setNewWish] = useState('');

    return (
        <div className="form-wish">
            <label htmlFor="inputWish">
                ¿Quieres añadir un nuevo deseo?<br/>
                <input type="text" id="inputWish" placeholder="Introduce tu nuevo deseo"
                onChange={e => setNewWish(e.target.value)}
                onKeyUp={(e) => {
                    if(e.key === 'Enter' && newWish.length){
                        onNewWish({text: newWish, done: false});
                        setNewWish('');
                        e.target.value = '';
                    }
                }}></input>
            </label>
            <button className="btn"
                onClick={() => {
                    setNewWish(document.querySelector("#inputWish").value)
                    onNewWish({text: newWish, done: false});
                    setNewWish('');
                    document.querySelector("#inputWish").value = '';
                }}>Nuevo Deseo</button>
    </div>
    );
}

InputWish.propTypes = {
    onNewWish: PropTypes.func,
}

InputWish.defaultProps = {
    onNewWish: () => {},
}

export default InputWish;