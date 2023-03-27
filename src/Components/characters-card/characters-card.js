import './characters-card.css';
import Card from '../card/card';
import MarvelService from '../../services/MarvelServices';
import { Component } from 'react';
import Spinner from '../Spinner/load-spinner';
import ErrorMessage from '../errorMessage/ErrorMesage';

export default class CharactersCards extends Component {
    state = {
        characters: [],
        loadState: true,
        error: false,
    }

    MarvelService = new MarvelService();

    loadCharacterCardsOnPage = (setCardsOnPage) => {
        this.MarvelService.getCharacters(setCardsOnPage)
            .then((newCharacters) => {
                this.props.updatedCardsOnPage();
                this.setState(({characters}) => ({
                    characters: [...characters,...newCharacters],
                    loadState: false,
                    error: false,
                }))
            })
            .catch((e) => {
                console.log(e)
                this.setState({
                    loadState: false,
                    error: true,
                })
            })
    }
  
    componentDidMount() {
        this.loadCharacterCardsOnPage();
    }
    componentDidUpdate(preProps) {
        if(preProps.setCardsOnPage !== this.props.setCardsOnPage) {
            this.loadCharacterCardsOnPage(this.props.setCardsOnPage)
        }
    }
        

    render() {
        const { props: { characterSelected }, state: { characters, loadState, error } } = this;
        let showCurrentInfo = null;
        if (loadState) {
            showCurrentInfo = <Spinner />
        } else if (error) {
            showCurrentInfo = <ErrorMessage style={{width: '300px', height: '300px',}}/>
        } else {
            showCurrentInfo = characters.map((element) => {
                
                const { id } = element;
                return (
                    <Card key={id} {...element} characterSelected={characterSelected} />
                )
            })
            

        }

        return (
                <div className="characters-cards">
                    {showCurrentInfo}
                </div>
           
        )
    }

} 
