import './card.css';
import { Component } from 'react';
import React from 'react';

export default class Card extends Component {
    state = { ...this.props, focus: false }
    
    onSelectedCharacter = () => {
        this.props.characterSelected(this.props)
    }
    onFocusElement = () => {
        this.setState(({focus}) => ({focus: !focus}))
        
    }
   
    render() {
        const currentClass = this.state.focus ? 'card lighting-border card--bottom card-focused' : 'card lighting-border card--bottom';
        const {onSelectedCharacter, onFocusElement, props:{ name, thumbnail }} = this;
        
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
}