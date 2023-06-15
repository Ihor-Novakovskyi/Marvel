import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import MagazineAd from '../magazine-ad/magazine-add';
import './comics-list.css';
import useMarvelService from '../../services/MarvelServices';
import { useEffect, useMemo } from 'react';
import Button from '../button/button';
import ErrorMessage from '../errorMessage/ErrorMesage';
import Spinner from '../Spinner/load-spinner';

export default function ComicsMagazines() {
    let showCurrentInfo = null;
    const {
        setProcessLoad,
        processLoad,
        error,
        comicsList,
        getGeneralListComics,
        comicsListOfSet,
        setcomicsListOfSet
    } = useMarvelService();


    useEffect(() => {
        getGeneralListComics(comicsListOfSet);
    }, [comicsListOfSet])
    const comicsElement = useMemo(() => { return comicsList.map(({ id, title, price, thumbnail }) => {
        return (

            <div key={id} className="magazines__comics comics" tabIndex="0">
                <Link style={{
                    color:'inherit'
                }} to={`/comic/${id}`}>
                    <div className="comics__image-wrapper">
                        <img src={thumbnail} className="comics__image-wrapper__item img" />
                    </div>
                    <p className='comics__comics-name'>{title}</p>
                    <span className="comics__price">{price}</span>
                </Link>
            </div>
        )
        })
    },[comicsList]);
  
    function updateLoad() {
        setcomicsListOfSet(comicsListOfSet + 8);
        setProcessLoad(true);
    }
    if(processLoad) {
        if(comicsListOfSet === 8) {
            showCurrentInfo = <Spinner/>;
        } else {
            showCurrentInfo = comicsElement;
        }
        
    } else if(error.status) {
        showCurrentInfo = <ErrorMessage/>;
        console.log(error.errorInfo);
    } else {
        showCurrentInfo = comicsElement;
    }

    return (
        <div className='magazines-wrapper'>
            <MagazineAd />
            <div className="magazines">
                {showCurrentInfo}
            </div>
            <Button
                disabled={processLoad} 
                btnName='ADD COMICS'
                color='brown'
                onClick={updateLoad}
                style={{
                    margin: '0 auto',
                    minWidth: '150px',
                }}
            >
                ADD COMICS
            </Button>
        </div>
    )
}


