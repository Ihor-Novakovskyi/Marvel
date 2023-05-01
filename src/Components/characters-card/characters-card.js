import './characters-card.css';
import Card from '../card/card';
import MarvlService from '../../services/MarvelServices';
import { useState, useMemo, useEffect } from 'react';
import Spinner from '../Spinner/load-spinner';
import ErrorMessage from '../errorMessage/ErrorMesage';

export default function CharactersCards({updatedCardsOnPage, setCardsOnPage, characterSelected}) {
    const [characters, setCharacters] = useState([]);
    const [loadState, setLoadState] = useState(true);
    const [error, setError] = useState(false);
    const MarvelService = useMemo(() => new MarvlService());

    const loadCharacterCardsOnPage = (setCardsOnPage) => {
        MarvelService.getCharacters(setCardsOnPage)
            .then((newCharacters) => {
                setCharacters([...characters,...newCharacters]);
                setLoadState(false);
                setError(false);
                updatedCardsOnPage();
            })
            .catch((e) => {
                console.log(e)
                setLoadState(false);
                setError(true);
            })
    }
  
    useEffect(() => {
      loadCharacterCardsOnPage();
    },[])

    useEffect(() => {
            loadCharacterCardsOnPage(setCardsOnPage)
    }, [setCardsOnPage])
        
    let showCurrentInfo = null;
    if (loadState) {
        showCurrentInfo = <Spinner />
    } else if (error) {
        showCurrentInfo = <ErrorMessage style={{width: '300px', height: '300px',}}/>
    } else {
        showCurrentInfo = characters.map((element) => {
            
            const { id } = element;
            return (
                <Card key={id} {...element} characterSelected={characterSelected} />
            )
        })
        

    }

    return (
            <div className="characters-cards">
                {showCurrentInfo}
            </div>
        
    )
} 
