

export default class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/characters';
    _apiKey = 'apikey=38eba90e10f78ecffe28d4ae338606b4';
    _apiOfSet = 221;
    getResource = async (url) => {
        const resp = await fetch(url);
        
        if (!resp.ok) {
            throw new Error(`Could not fetch ${url}, status ${resp.status}`);
        }

        return resp.json();
    }

    getCharacters = async(apiOfSet = this._apiOfSet) => {
        const res = await this.getResource(this._apiBase + `?limit=9&offset=${apiOfSet}&` + this._apiKey);
        return res.data.results.map(this._tranformDataCharacter);
    }

    getCharacter = async(id) => {
        const res = await this.getResource(`${this._apiBase}/${id}?${this._apiKey}`);
        return  this._tranformDataCharacter(res.data.results[0]);
    }

    _tranformDataCharacter = (character) => {
        return {
            id: character.id,
            name: character.name.toUpperCase(),
            description: character.description === "" ? "...sorry, we do not have any information about this character": character.description.slice(0, 226) + '...',
            thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics
        }
    }
}

