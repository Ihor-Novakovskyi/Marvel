import './magazine-ad.css';
import marvelLogo from './Avengers-logo.png';
import marvelTeam from './Avengers-add.png';

export default function MagazineAd() {
    return (
        <div className="ad-label">
            <div className='ad-label__wrapper'>
                <div className="ad-label__image">
                    <img src={marvelTeam} alt="comics add" className="ad-label__image__item" />
                </div>
                <p className="ad-label__slogan">New comics every week!<br /> Stay tuned!</p>
            </div>
            <div className="ad-label__logo-image">
                <img src={marvelLogo} alt="logo image" className="ad-label__logo-image__item" />
            </div>
        </div>
    )
}