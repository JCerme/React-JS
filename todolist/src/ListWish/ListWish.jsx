import React from 'react';
import PropTypes from 'prop-types';

const ListWish = ({wishes}) =>{
    return (
    <ul className="list">
        {wishes.map(({text, done}, i) => <li id={i} className={`element ${done ? 'done' : ''}`} key={i}>{text}</li>)}
    </ul>
    );
}

ListWish.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        done: PropTypes.bool,
    }))
};

ListWish.defaultProps = {
    wishes: []
};

export default ListWish;