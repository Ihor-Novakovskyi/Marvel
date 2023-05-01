import { useState } from "react";
import './main-info.css';
import Button from "../button/button";
import AdInfo from '../ad-info/ad-info.js';
import CharactersCards from '../characters-card/characters-card.js';
import CharacterDescriptionBlock from '../character-description-block/character-description';
import CharacterSearch from '../character-search/character-search.js';
import ErrorBoundary from '../errorBoundary/ErrorBoundart';
import chracterImage from './bg asset.png'

export default function MainInfo(props) {
    const [clickOnCharacter, setClickOnCharacter] = useState(false);
    const [character, setCharacter] = useState(null);
    const [vievCardsOnPage, setVievCardsOnPage] = useState(221);
    const [loadingNewCharacters, setLoadingNewCharacters] = useState(false);
    
    const onUpdateCardsOnPage = () => {
        setVievCardsOnPage(vievCardsOnPage + 9);
        setLoadingNewCharacters(true);
    }

    const updatedCardsOnPage = () => {
        setLoadingNewCharacters(false);
    }

    const characterSelected = (char) => {
        if (character === null || character.id !== char.id) {
            setCharacter(char);
            setClickOnCharacter(true);
        }
    }

    return (
        <>
            <ErrorBoundary>
                <AdInfo />
            </ErrorBoundary>
            <div className="characters-block">
                <ErrorBoundary>
                    <CharactersCards updatedCardsOnPage={updatedCardsOnPage} setCardsOnPage={vievCardsOnPage} characterSelected={characterSelected} />
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
                    {/* backgroundImage: 'url("./image/bg asset.png")' */}
                    <div className="main-page__character-label" style={{
                        backgroundImage: `url("${chracterImage}")`
                    }}>
                    </div>

                </div>
            </div>
            <Button btnName="LOAD MORE" color="brown" onClick={onUpdateCardsOnPage} disabled={loadingNewCharacters} style={{
                 ...(loadingNewCharacters ? {opacity: '50%', transform: 'none'} : {}), left: "25%", minWidth: '150px', maxWidth: '150px'
            }}/>
                
            
        </>
    )
}
