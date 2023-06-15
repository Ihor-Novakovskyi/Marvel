import MagazineAd from '../magazine-ad/magazine-add';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ErrorMessage from '../errorMessage/ErrorMesage';
import Spinner from '../Spinner/load-spinner';
import { BrowserRouter as Router, Link, Route, Routes, NavLink } from "react-router-dom";
import useMarvelService from '../../services/MarvelServices';
import './detai-character.css';
import AdInfo from '../ad-info/ad-info';

export default function DetailCharacter(props) {
    const { name } = useParams();
    const { processLoad, error, character, getCharacter } = useMarvelService();
    useEffect(() => {
       getCharacter(name);
    }, [])
    console.log('render')
    let showInfo = null;
    if (processLoad) {
        showInfo = <Spinner/>;
    } else if (error.status) {
        console.log(error)
        showInfo = <ErrorMessage error={error.errorInfo.message} />;
    } else {
        
        console.log(character)
        showInfo = <CharacterInfo {...character} />
    }
    return (
        <>
            <MagazineAd />
            <div className="character-info">
                {showInfo}
            </div>

        </>

    )
}


function CharacterInfo({ name, description, thumbnail }) {
    return (
        <>
            <div className="character-info__character-image">
                <img src={`${thumbnail}`} alt="image character" className="character-info__character-image__item" />
            </div>
            <div className="character-info__wrapper">
                <span className='character-info__name'>{name}</span>
                <p className='character-info__description'>
                    {description}
                </p>
            </div>
        </>
    )
}