import './App.css';
import { Component } from 'react';
import DetailCharacter from './Components/detail-character/detail-character'
import MainInfo from './Components/main-info/main-info';
import  ComicsList  from './Components/comics list/comics-list';
import ComicsDetail from './Components/comics-detail/comics-detail';

export default class MarvelComics extends Component {
  state = {
    page: 'start-page',
    selectedCard: false,
    searchRezult: '',
    searchWasDone: '',
  }

 
  render() {
    let { page }  = this.state;
    let ShowInfo = '';
    if(page === 'start-page') {
      ShowInfo = <MainInfo/>
    }
    if(page === 'detail-info') {
      ShowInfo = <DetailCharacter/>
    }
    if(page === 'comics-list') {
      ShowInfo = <ComicsList/>

    }
    if(page === 'comics-detail'){
      ShowInfo = <ComicsDetail/>
    }

   

    return (
      <div className="wrapper">
        <div className="main-page">
          <div className="main-page__top-label top-label">
            <span className='top-label__item-left'><span>Marvel</span> information portal</span>
            <span className='top-label__item-right'><span className='top-label__item-right__item'>
              Characters</span> / Comics</span>
          </div>
          {ShowInfo}
        </div>
      </div>
    )
  }
}
