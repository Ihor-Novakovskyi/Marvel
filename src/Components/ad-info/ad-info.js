import './ad-info.css';
import Button from '../button/button';
import React, { useState, useMemo, useEffect } from 'react';
import MarveService from '../../services/MarvelServices';
import Spinner from '../Spinner/load-spinner';
import ErrorMesage from '../errorMessage/ErrorMesage';

export default function AdInfo(props) {
    const [character, setCharacter] = useState({});
    const [processLoad, setProcessLoad] = useState(true);
    const [error, setError] = useState(false);

    const loadCharacter = (char) => {
        setCharacter(char);
        setProcessLoad(false);
        setError(false);
    }
    const loadingChar = () => {
        setProcessLoad(true);
    }

    const errorMessage = () => {
        setError(true);
        setProcessLoad(false);
    }
    const MarvelService = useMemo(() => new MarveService(), []);

    const upDateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        MarvelService
            .getCharacter(id)
            .then(loadCharacter).catch(errorMessage);

        loadingChar();
    }

    useEffect(() => upDateChar(), []);

    let showCurrent = null;
    if (processLoad) {
        showCurrent = <Spinner />
    } else if (error) {
        showCurrent = <ErrorMesage />
    } else {
        showCurrent = <LoadedCharacter character={character} />
    }
    return (
        <div className="main-page__ad-info lighting-border">
            <div className="main-page__character-info">
                {showCurrent}
            </div>
            <div className="main-page__info-block">
                <p className='slogan'>
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="slogan">
                    Or choose another one
                </p>
                <Button btnName="TRY IT" onClick={upDateChar} color="brown" angle="black" />
                <div className="weapon-container__wrapper-first">
                    <img src='./image/mjolnir' alt="weapon item" className="weapon-container__item-1" />
                </div>
                <div className="weapon-container__wrapper-second">
                    <img src="./image/shield" alt="weapon item" className="weapon-container__item-2" />
                </div>
            </div>
        </div>

    )
}


function LoadedCharacter({ character }) {
    const { name, description, thumbnail = '', homepage, wiki, comics } = character;
    return (
        <>
            <div className="wrapper-character-img">
                <img className="main-page__img-item img" src={thumbnail} alt="character image" />
            </div>
            <div className='main-page__character-describe'>
                <p className="main-page__name-character name-character">{name}</p>
                <p className="main-page__description-character description-character">
                    {description}
                </p>
                <div className="main-page__action-button">
                    <a href={homepage} className="action-button">
                        <Button btnName="HOMEPAGE" color="brown" style={{ marginRight: "32px" }} />
                    </a>
                    <a href={wiki} className="action-button">
                        <Button btnName="WIKI" color="grey" />
                    </a>
                </div>
            </div>
        </>
    )
}
