import { useState } from "react";
import './main-info.css';
import Button from "../button/button";
import AdInfo from '../ad-info/ad-info.js';
import CharactersCards from '../characters-card/characters-card.js';
import CharacterDescriptionBlock from '../character-description-block/character-description';
import CharacterSearch from '../character-search/character-search.js';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import chracterImage from './bg asset.png'
import { useLocation, useParams  } from "react-router-dom";
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
                    
                    <ErrorBoundary>
                        <CharacterDescriptionBlock character={character} clickOnCharacter={clickOnCharacter}/>   
                    </ErrorBoundary>
                   
                    <ErrorBoundary>
                        <CharacterSearch active={true} searchRezult='not found' primaryForm='primary' />
                    </ErrorBoundary>
                
                    <div className="main-page__character-label" style={{
                        backgroundImage: `url("${chracterImage}")`
                    }}>
                    </div>

                </div>
            </div>
            <Button btnName="LOAD MORE" color="brown" onClick={onUpdateCardsOnPage} disabled={loadingNewCharacters} style={{
                 left: "25%", minWidth: '150px',
            }}/>
                
            
        </>
    )

}
// ...(loadingNewCharacters ? {opacity: '50%', transform: 'none'} : {}),