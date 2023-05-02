import './App.css';
import { Component, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import DetailCharacter from './Components/detail-character/detail-character'
import MainInfo from './Components/main-info/main-info';
import  ComicsList  from './Components/comicsMagazines/comics-list';
import ComicsDetail from './Components/comics-detail/comics-detail';
import ComicsMagazines from './Components/comicsMagazines/comics-list';
import ErrorBoundary from './Components/errorBoundary/ErrorBoundart';



export default function  MarvelComics() {

    return (
     <Router>
      <div className="wrapper">
        <div className="main-page">
        <ErrorBoundary>
        <div className="main-page__top-label top-label">
            <span className='top-label__item-left'><span>Marvel</span> information portal</span>
            <span className='top-label__item-right'>
              <NavLink style={({isActive, isPending}) => { return {
                color: isActive ? '#9f0013' : '#000000',
                };
              }}
                  to='ihor-novakovskyi/Marvel'>
                <span className='top-label__item-right__item'>
                  Characters
                </span>
                </NavLink>
                <NavLink style={({isActive}) => { return {
                color: isActive ? '#9f0013' : '#000000',
                };
              }} to='magazines'>
               / Comics
               </NavLink>
            </span>
          </div>
        </ErrorBoundary>
          <Routes>
            <Route path='ihor-novakovskyi/Marvel' element={<MainInfo/>}/>
            <Route path='detail-info' element={<DetailCharacter/>}/>
            <Route path='comics-detail'element={<ComicsDetail/>}/>
            <Route path='magazines' element={<ComicsMagazines/>}/>
          </Routes>
        </div>
      </div>
     </Router>
    )
  }
