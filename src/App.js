import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailCharacter from './Components/detail-character/detail-character'
import MainInfo from './Components/main-info/main-info';
import  ComicsList  from './Components/comics list/comics-list';
import ComicsDetail from './Components/comics-detail/comics-detail';

export default function  MarvelComics() {
  state = {
    page: 'start-page',
    selectedCard: false,
    searchRezult: '',
    searchWasDone: '',
  }

    return (
     <Router>
         <div className="wrapper">
        <div className="main-page">
          <div className="main-page__top-label top-label">
            <span className='top-label__item-left'><span>Marvel</span> information portal</span>
            <span className='top-label__item-right'><span className='top-label__item-right__item'>
              Characters</span> / Comics</span>
          </div>
          <Route path='/' element={<MainInfo/>}/>
          <Route path='detail-info' element={<DetailCharacter/>}/>
          <Route path='comics-list' element={<ComicsList/>}/>
          <Route path='comics-detail'element={<ComicsDetail/>}/>
        </div>
      </div>
     </Router>
    )
  }
