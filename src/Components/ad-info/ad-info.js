import './ad-info.css';
import Button from '../button/button';
import React, { useEffect } from 'react';
import useMarvelService from '../../services/MarvelServices';
import Spinner from '../Spinner/load-spinner';
import ErrorMesage from '../errorMessage/ErrorMesage';

export default function AdInfo() {
    const {setProcessLoad, processLoad, error, character, getCharacter} = useMarvelService();
    
    const upDateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id);
        setProcessLoad(true);
    }

    useEffect(() => upDateChar(), []);

    let showCurrent = null;
    if (processLoad) {
        showCurrent = <Spinner />
    } else if (error.status) {
        showCurrent = <ErrorMesage />
        console.log(error.errorInfo)
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
                <Button 
                    btnName="TRY IT" 
                    onClick={upDateChar} 
                    color="brown" 
                    angle="black" 
                    disabled={processLoad}
                    style={{...(processLoad ? { opacity: '50%', transform: 'none'} : null)}}
                />
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
    const { name, description, thumbnail = '', homepage, wiki } = character;
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
