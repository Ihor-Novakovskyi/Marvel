import { Component } from "react";
import PropTypes from 'prop-types';
import './main-info.css';
import AdInfo from '../ad-info/ad-info.js';
import CharactersCards from '../characters-card/characters-card.js';
import CharacterDescriptionBlock from '../character-description-block/character-description';
import CharacterSearch from '../character-search/character-search.js';
import ErrorBoundary from '../errorBoundary/ErrorBoundart';

export default class MainInfo extends Component {
    state = {
        clickOnCharacter: false,
        character: null,
        setVievCardsOnPage: 221,
        loadingNewCharacters: false,
    }
   

    onUpdateCardsOnPage = () => {
        this.setState(({ setVievCardsOnPage }) => ({
            setVievCardsOnPage: setVievCardsOnPage + 9,
            loadingNewCharacters: true,
        }))
    }

    updatedCardsOnPage = () => {
        this.setState({loadingNewCharacters: false})
        
    }
    characterSelected = (character) => {
        if (this.state.character === null || this.state.character.id !== character.id) {
            this.setState({ character, clickOnCharacter: true })
        }
    }

    
    render() {
        const { onUpdateCardsOnPage, characterSelected, updatedCardsOnPage} = this;
        const { clickOnCharacter, character, setVievCardsOnPage, loadingNewCharacters } = this.state;
        return (
            <>
                <ErrorBoundary>
                    <AdInfo />
                </ErrorBoundary>
                <div className="characters-block">
                    <ErrorBoundary>
                        <CharactersCards updatedCardsOnPage={updatedCardsOnPage} setCardsOnPage={setVievCardsOnPage} characterSelected={characterSelected} />
                    </ErrorBoundary>
                    <div className="actions-block">
                        {/* to this component in props i pass 'selected' or no selected card */}
                        <ErrorBoundary>
                            <CharacterDescriptionBlock character={character} clickOnCharacter={clickOnCharacter}/>   
                        </ErrorBoundary>
                        {/* in CharacterSearch we pass(передавать)  true or false and our fom war render  
                            on depending(в зависисомсти) this value
                            searchRezult (found, not found, error)
                            form primary state without second button*/}
                        <ErrorBoundary>
                            <CharacterSearch active={true} searchRezult='not found' primaryForm='primary' />
                        </ErrorBoundary>

                        <div className="main-page__character-label" style={{
                            backgroundImage: 'url("./image/bg asset.png")'
                        }}>
                        </div>

                    </div>
                </div>
                <button onClick={onUpdateCardsOnPage} disabled={loadingNewCharacters} style={
                    loadingNewCharacters ? {opacity: '50%', transform: 'none'} : null
                } className="btn btn-brown btn-brown--position-center btn-brown--size">
                    <img src='./image/triangle.svg' className='triangle-top-left'></img>
                    <img src='./image/triangle_1.svg' className='triangle-bottom-right'></img>
                    LOAD MORE
                </button>
            </>
        )
    }

}
