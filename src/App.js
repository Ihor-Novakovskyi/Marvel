import "./App.css";
import { Component, useRef, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes, NavLink } from "react-router-dom";
import DetailCharacter from "./Components/detail-character/detail-character";
import MainInfo from "./Components/main-info/main-info";
import ComicDetail from "./Components/comic-detail/comics-detail";
import ComicsMagazines from "./Components/comicsMagazines/comics-list";
import ErrorBoundary from "./Components/errorBoundary/ErrorBoundary";
import Page404 from "./Components/page404/404";


export default function MarvelComics() {

  return (
    <Router>
      <div className="wrapper">
        <div className="main-page">
          <ErrorBoundary>
            <div className="main-page__top-label top-label">
              <Link to="ihor-novakovskyi/Marvel" style={{ color: 'inherit' }}>
                <span className="top-label__item-left">
                  <span>
                    Marvel
                  </span>
                  &nbsp;information portal
                </span>
              </Link>
              <span className="top-label__item-right">
                <NavLink style={({ isActive }) => {
                  return {
                    color: isActive ? "#9f0013" : "#000000",
                  };
                }}
                  to="ihor-novakovskyi/Marvel">
                  <span className="top-label__item-right__item">
                    Characters
                  </span>
                </NavLink>
                <NavLink style={({ isActive }) => {
                  return {
                    color: isActive ? "#9f0013" : "#000000",
                  };
                }} to="comics">
                  / Comics
                </NavLink>
              </span>
            </div>
          </ErrorBoundary>
          <Routes>
            <Route path="ihor-novakovskyi/Marvel" element={<MainInfo/>} />
            <Route path="detail-info" element={<DetailCharacter/>} />
            <Route path="comics" element={<ComicsMagazines/>} />
            <Route path="comic/:id" element={ <ComicDetail/> } />
            <Route path="character/:name" element={<DetailCharacter/>} />
            <Route path="*" element={ <Page404 /> } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
