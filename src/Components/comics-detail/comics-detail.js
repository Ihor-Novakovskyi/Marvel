import './comics-detail.css';
import MagazineAd from '../magazine-ad/magazine-add';

export default function ComicsDetail() {
    return (
        <>
            <MagazineAd/>
            <div className="comics-detail">
                <div className="comics-detail__image-wrapper">
                    <img src="./image/xmen.png" alt="comics image" className="comics-detail__image-wrapper" />
                </div>
                <div className="comics-detail__description-block">
                    <p className="comics-detail__name">X-Men: Days of Future Past</p>
                    <p className="comics-detail__description">
                        Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
                    </p>
                    <span className='comics-detail__page-info'>144 pages</span>
                    <span className='comics-detail__language-info'>Language: en-us</span>
                    <span className='comics-detail__price-info'>9.99$</span>
                </div>
                <a href="/" className='comics-detail__action-return'>Back to all</a>
            </div>
        </>
    
    )
}
