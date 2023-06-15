import './comic-detail.css';
import MagazineAd from '../magazine-ad/magazine-add';
import { useParams, Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelServices';
import { useEffect } from 'react';
import Spinner from '../Spinner/load-spinner';
import ErrorMessage from '../errorMessage/ErrorMesage';


export default function ComicDetail() {
    let showInfo = null;
    const { id } = useParams();
    const { processLoad, error, getComic, comic } = useMarvelService();

    useEffect(() => {
        getComic(id);
    }, [])

    if (processLoad) {
        showInfo = <Spinner />;
    } else if (error.status) {
        showInfo = <ErrorMessage error={ error.errorInfo.message } />;
    } else {
        showInfo = <ShowComic { ...comic } />;
    }

    return (
        <>
            <MagazineAd />
            <div className='comic-wrapper'>
                { showInfo }
                <Link to="/comics" className='comic-detail__action-return'>Back to all</Link>
            </div>
        </>

    )
}

function ShowComic({ title, description, language, pages, price, thumbnail }) {
    return (
        <div className="comic-detail">
            <div className="comic-detail__image-wrapper">
                <img src={ thumbnail } alt="comic image" className="comic-detail__image-wrapper" />
            </div>
            <div className="comic-detail__description-block">
                <p className="comic-detail__name">{ title }</p>
                <p className="comic-detail__description">
                    { description }
                </p>
                <span className='comic-detail__page-info'>{ pages } pages</span>
                <span className='comic-detail__language-info'>Language: { language }</span>
                <span className='comic-detail__price-info'>{ price }$</span>
            </div>
        </div>
    )
}