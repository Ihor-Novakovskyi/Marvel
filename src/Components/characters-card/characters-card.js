import './characters-card.css';
import Card from '../card/card';
import { useEffect } from 'react';
import Spinner from '../Spinner/load-spinner';
import ErrorMessage from '../errorMessage/ErrorMesage';
import useMarvelService from '../../services/MarvelServices';

export default function CharactersCards({updatedCardsOnPage, setCardsOnPage, characterSelected}) {

    const { getCharacters, error, processLoad, characters } = useMarvelService(updatedCardsOnPage);

    const loadCharacterCardsOnPage = (setCardsOnPage) => {
        getCharacters(setCardsOnPage);
         
    }
  
    useEffect(() => {
      loadCharacterCardsOnPage();
    },[])

    useEffect(() => {
            loadCharacterCardsOnPage(setCardsOnPage)
    }, [setCardsOnPage])
        
    let showCurrentInfo = null;
    if (processLoad) {
        showCurrentInfo = <Spinner />
    } else if (error.status) {
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
