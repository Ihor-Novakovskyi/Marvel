import './card.css';
import { useState } from 'react';
import React from 'react';
export default function Card(props) {
    const [focus, setFocus] = useState(false);    
    const onSelectedCharacter = () => {
        props.characterSelected(props)
    }
    const onFocusElement = () => {
        setFocus(!focus)
    }
    const currentClass = focus ? 'card lighting-border card--bottom card-focused' : 'card lighting-border card--bottom';
    const { name, thumbnail } = props;
    
    return (
        <div onClick={onSelectedCharacter} onFocus={onFocusElement} onBlur={onFocusElement} tabIndex='0' className={currentClass}>
            <div className="card-image">
                <img src={thumbnail} alt="image character in card" className="card-image__item" />
            </div>
            <span className='card__character-name'>
                {name}
            </span>
        </div>
    )
}