import './ad-info.css';
import React, { Component } from 'react';
import MarvelService from '../../services/MarvelServices';
import Spinner from '../Spinner/load-spinner';
import ErrorMesage from '../errorMessage/ErrorMesage';
export default class AdInfo extends Component {
    state = {
        character: {},
        processLoad: true,
        error: false,
    }
    loadCharacter = (character) => {
        this.setState(
            {
                character, 
                processLoad: false,
                error: false,
            }
        );
    }
    loadingChar = () => {
        this.setState({processLoad: true})
    }

    errorMessage = () => {
        this.setState({error: true, processLoad: false})
    }
    MarvelService = new MarvelService();
    upDateChar = () => {
        this.loadingChar()
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.MarvelService
            .getCharacter(id)
            .then(this.loadCharacter).catch(this.errorMessage)
    }

    componentDidMount = () => {
        this.upDateChar();
    }
 
    render() {
        const {processLoad, character, error} = this.state;
        let showCurrent = null;
        if (processLoad) {
            showCurrent = <Spinner/>
        } else if (error) {
            showCurrent = <ErrorMesage/>
        } else {
            showCurrent = <LoadedCharacter character={character}/>
        }
        return (
            <div className="main-page__ad-info lighting-border">
                <div className="main-page__character-info">
                    {showCurrent}
                </div>
                <div className="main-page__info-block">
                    <p className='slogan'>
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="slogan">
                        Or choose another one
                    </p>
                
                    <button onClick={this.upDateChar} className="btn btn-brown">
                        <img src='./image/triangle-left.svg' className='triangle-top-left'></img>
                        <img src='./image/triangle-right.svg' className='triangle-bottom-right'></img>
                        TRY IT
                    </button>

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
}


function LoadedCharacter({character}) {
    const { name, description, thumbnail = '', homepage, wiki, comics } = character;
    return ( 
        <>
            <div className="wrapper-character-img">
                <img className="main-page__img-item img" src={thumbnail} alt="character image"/>
            </div>
            <div className='main-page__character-describe'>
                <p className="main-page__name-character name-character">{name}</p>
                <p className="main-page__description-character description-character">
                    {description}
                </p>
                <div className="main-page__action-button">
                    <a href={homepage} className="action-button">
                        <button className="main-page__btn btn btn-brown main-page__btn-brown--mr-right">
                            <img src='./image/triangle.svg' className='triangle-top-left'></img>
                            <img src='./image/triangle_1.svg' className='triangle-bottom-right'></img>
                            HOMEPAGE
                        </button>
                    </a>
                    <a href={wiki} className="action-button">
                        <button className="btn btn-grey">
                            <img src='./image/triangle.svg' className='triangle-top-left'></img>
                            <img src='./image/triangle_1.svg' className='triangle-bottom-right'></img>
                            WIKI
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
