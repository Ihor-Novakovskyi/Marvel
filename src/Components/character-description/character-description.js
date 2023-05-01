import './character-description.css';
import Button from '../button/button';

export default function CharacterDescription({character}) {
    const comicsList = character.comics.available !== 0 ? <ComicsList comics={character.comics}/> 
    : "...sorry, we do not have any information about comics";

    return (   
        <div className="description lighting-border">
            <SelectedCharater character={character} />
            <span className='text-label'>Comics:</span>
                {comicsList}
        </div>
    )
}

const SelectedCharater = ({ character }) => {
    const { name, description, thumbnail, homepage, wiki } = character;
    return (
        <div className="descritption-character">
            <div className="description-character__wrapper">
                <div className="description__img">
                    <img src={thumbnail} alt="characters image" className="description__img__item" />
                </div>

                <div>
                    <p className="description_name-character name-character name-character--mr-bottom">{name}</p>
                    <div>
                        <a href={homepage}>
                            <Button btnName="HOMEPAGE"  style={{marginBottom: "16px"}} color="brown"/>
                        </a>
                    </div>

                    <div>
                        <a href={wiki}>
                            <Button btnName="WIKI" color="grey"/>  
                        </a>
                    </div>
                </div>
            </div>

            <p className="description__text-info">
                {description}
            </p>
        </div>
    )
}

const ComicsList = ({comics:{ available, items }}) => {
    let comicsItems = available > 14 ? items.slice(0, 14) : items;
    let comicsList = comicsItems.map((item, id) => {
        return (
            <a className="comics-list__item lighting-border lighting-border" href={item.resourceURI + 'apikey=38eba90e10f78ecffe28d4ae338606b4'} key={id}>
                <li>
                    {item.name}
                </li>
            </a>
        )
    });

    return (
        <ul className="comics-list">
            {comicsList}
        </ul>
    ) 
}