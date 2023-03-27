import MagazineAd from '../magazine-ad/magazine-add';
import './comics-list.css';


export default function ComicsList() {

const comicsINfo = [
    {
        name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
        imgLink: './image/x-men1.png',
        price: '9.99$',
        id: 1,
    },
    {
        name: 'X-Men: Days of Future Past',
        imgLink: './image/xmen.png',
        price: '9.99$',
        id: 2,
    },
    {
        name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
        imgLink: './image/x-men1.png',
        price: '9.99$',
        id: 3,
    },
    {
        name: 'X-Men: Days of Future Past',
        imgLink: './image/xmen.png',
        price: '9.99$',
        id: 4,
    },
    {
        name: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB',
        imgLink: './image/x-men1.png',
        price: '9.99$',
        id: 5,
    },
    {
        name: 'X-Men: Days of Future Past',
        imgLink: './image/xmen.png',
        price: '9.99$',
        id: 6
    },
    {
        name: 'X-Men: Days of Future Past',
        imgLink: './image/xmen.png',
        price: '9.99$',
        id: 7,
    },
    {
        name: 'X-Men: Days of Future Past',
        imgLink: './image/xmen.png',
        price: '9.99$',
        id: 8,
    }

];

const comicsElement = comicsINfo.map(({ name, imgLink, price, id }) => {
    return (
        <div key={id} className="magazines__comics comics">
            <div className="comics__image-wrapper">
                <img src={imgLink} className="comics__image-wrapper__item img" />
            </div>
            <p className='comics__comics-name'>{name}</p>
            <span className="comics__price">{price}</span>
        </div>
    )
})


return (
    <>
        <MagazineAd />
        <div className="magazines">
            {comicsElement}
        </div>

    </>
)

}