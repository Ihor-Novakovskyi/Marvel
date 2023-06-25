import './character-search.css';
import { Component, useState, memo, useEffect } from 'react';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelServices';

function CharactersSearch() {
   const [inputData, setInputData] = useState('');
   const [errorValidate, setErrorValidate] = useState({ nameErrorValid: '', stateErrorValid: false });
   const { character, getCharacter, setCharacter, processLoad, setProcessLoad } = useMarvelService();
   let charClassCol = '';
   let txtResSearch = '';
   const enterringData = (e) => {
      if (character.id) {
         setCharacter({})
      }
      setInputData(e.target.value);
      validate(e.target.value);
   }
   console.log('form render')
   console.log('process load', processLoad)
   useEffect(() => setProcessLoad(false), [])
   const validate = (enterValue) => {

      if ((/^[\d]+$/g).test(enterValue)) {
         setErrorValidate({ nameErrorValid: "Field cann't contain number", stateErrorValid: false })
         return;
      }
      if (enterValue.length === 0 || enterValue.length <= 3 || enterValue.trim().length >= 10) {
         setErrorValidate({ nameErrorValid: "Uncorrect length name", stateErrorValid: false })
         return;
      }
      setErrorValidate({ nameErrorValid: '', stateErrorValid: true });

   }

   const gettingDataCharacter = (e) => {
      e.preventDefault();
      if (errorValidate.stateErrorValid) {
         setProcessLoad(true);
         getCharacter(inputData)
      }
   }
   console.log(!isNaN(character.id), character.id)
   if (character.id) {
      if (!isNaN(character.id)) {
         console.log("character.id", character.id)
         charClassCol = 'search-form__rezult-info--green';
         txtResSearch = `There is! Visit ${character.name} page?`
      } else {
         charClassCol = 'search-form__rezult-info--red';
         txtResSearch = 'The character was not found. Check the name and try again';
      }
   }

   return (

      <div className="search-form lighting-border">
         <form onSubmit={ gettingDataCharacter } className='secondForm'>
            <p className="searc-form__action-label">Or find a character by name:</p>
            <div className='search-form__wrapper'>
               <input type="text" className="search-form__field" placeholder='Enter name' value={ inputData } onChange={ enterringData } />
               <Button disabled={ processLoad } btnName="FIND" color="brown" />
            </div>
         </form>
         <div className={ `search-form__wrapper search-form__wrapper--space-between` }>
            { !errorValidate.stateErrorValid ? <p className='search-form__rezult-info--red'>{ errorValidate.nameErrorValid }</p> : null }
            { character.id ? <p className={ charClassCol }>{ txtResSearch }</p> : null }
            { !isNaN(character.id) ? <Link to={ `/character/${inputData}` }><Button btnName="TO PAGE" color="grey" /></Link> : null }
         </div>
      </div>
   )
}
export default CharactersSearch;