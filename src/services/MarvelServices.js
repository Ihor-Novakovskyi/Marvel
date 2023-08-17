import useHttp from "../Components/hooks/http.hook";
import { useState } from "react";
import defaultImage from "./hero.jpg"


export default function useMarvelService(updatedCardsOnPage) {
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=38eba90e10f78ecffe28d4ae338606b4';
    const { processLoad, setError, setProcessLoad, error, request } = useHttp();
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState({});
    const [comicsList, setComicsList] = useState([]);
    const [comicsListOfSet, setcomicsListOfSet] = useState(8);
    const [comic, setComic] = useState({});

    const getCharacters = async (apiOfSet) => {
        const res = await request(_apiBase + `characters?limit=9&offset=${apiOfSet}&` + _apiKey);
        setError({ status: false, errorInfo: '' });
        setProcessLoad(false);
        setCharacters([...characters, ...res.data.results.map(_tranformDataCharacter)]);
        updatedCardsOnPage();
    }

    const getCharacter = async (set) => {
        if (!isNaN(set)) {
            const res = await request(`${_apiBase}characters/${set}?${_apiKey}`);
            setCharacter(_tranformDataCharacter(res.data.results[0]));
            setError({ status: false, errorInfo: '' });
            setProcessLoad(false);
        } else {
            const res = await (request(`${_apiBase}characters?name=${set}&${_apiKey}`))
            setError({ status: false, errorInfo: '' });
            setProcessLoad(false);
            if (!!res.data.results.length) {
                setCharacter(_tranformDataCharacter(res.data.results[0]));
            } else {
                setCharacter({
                    id: "damaged",
                    name: "Hydra damaged story character",
                    description: "...sorry, we do not have any information about this character",
                    thumbnail: defaultImage,
                    homepage: "Home url",
                    wiki: "Home url",
                    comics: "...sorry, we do not have any information about this character"
                })
            }



        }

    }

    const getGeneralListComics = async (apiOfSet) => {
        const res = await request(_apiBase + `comics?limit=8&offset=${apiOfSet}&` + _apiKey);
        const list = [...comicsList, ..._filterDataComics(res)];
        setError({ status: false, errorInfo: '' });
        setProcessLoad(false);
        setComicsList(list)
     
    }

    const getComic = async (id) => {
        const res = await request(_apiBase + `comics/${id}?` + _apiKey);
        setComic(_filterDataComic(res));
        setError({ status: false, errorInfo: '' });
        setProcessLoad(false);
    }

    const _filterDataComic = (res) => {
        const { data: { results: [{ title, textObjects, pageCount: pages, prices, thumbnail }] } } = res;
        return ({
            title,
            description: textObjects[0].text,
            language: textObjects[0].language,
            pages,
            price: prices[0].price,
            thumbnail: thumbnail.path + '.' + thumbnail.extension,
        })
    }

    const _filterDataComics = ({ data: { results } }) => {
        return results.map(({ id, title, prices, thumbnail, description }) => {
            return {
                id,
                title,
                price: prices[0].price,
                thumbnail: thumbnail.path + '.' + thumbnail.extension,
            }
        })
    }
    const _tranformDataCharacter = (character) => {
        if (character) {
            return {
                id: character.id,
                name: character.name.toUpperCase(),
                description: character.description === "" ? "...sorry, we do not have any information about this character" : character.description.slice(0, 226) + '...',
                thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
                homepage: character.urls[0].url,
                wiki: character.urls[1].url,
                comics: character.comics
            }
        }
        return {}
    }

    return {
        setProcessLoad,
        processLoad,
        error,
        character,
        setCharacter,
        characters,
        getCharacters,
        getCharacter,
        comicsList,
        setComicsList,
        getGeneralListComics,
        comicsListOfSet,
        setcomicsListOfSet,
        getComic,
        comic
    }
}
