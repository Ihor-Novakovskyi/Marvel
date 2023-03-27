import MagazineAd from '../magazine-ad/magazine-add';
import './detai-character.css';
import AdInfo from '../ad-info/ad-info';

export default function DetailCharacter(props) {

    return (
        <>
            
            <MagazineAd/>
            <div className="character-info">
                <div className="character-info__character-image">
                    <img src="./image/loki.jpg" alt="image character" className="character-info__character-image__item" />
                </div>
                <div className="character-info__wrapper">
                    <span className='character-info__name'>LOKI</span>
                    <p className='character-info__description'>
                    In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                    </p>
                </div>
            </div>

        </>

    )
}