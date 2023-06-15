import './character-search.css';
import { Component, useState } from 'react';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelServices';

export default function CharactersSearch({ active, primaryForm, searchRezult }) {
   const [inputData, setInputData] = useState('');
   const [errorValidate, setErrorValidate] = useState({ nameErrorValid: '', stateErrorValid: false });
   const { character, getCharacter, setCharacter,  processLoad, setProcessLoad } = useMarvelService();
   let charClassCol = '';
   let txtResSearch = '';
   const enterringData = (e) => {
      if (character.id) { 
         setCharacter({})
      }
      setInputData(e.target.value);
      validate(e.target.value);
   }
console.log('process load',processLoad)
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
         getCharacter(inputData); 
         setProcessLoad(true);
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
         <form onSubmit={ gettingDataCharacter }>
            <p className="searc-form__action-label">Or find a character by name:</p>
            <div className='search-form__wrapper'>
               <input type="text" className="search-form__field" placeholder='Enter name' value={ inputData } onChange={ enterringData } />
               <Button disabled={false} btnName="FIND" color="brown" />
            </div>
         </form>
         <div className={ `search-form__wrapper search-form__wrapper--space-between` }>
            { !errorValidate.stateErrorValid ? <p className='search-form__rezult-info--red'>{ errorValidate.nameErrorValid }</p> : null }
            { character.id ? <p className={charClassCol}>{txtResSearch}</p> : null }
            { !isNaN(character.id) ? <Link to={ `/character/${inputData}` }><Button btnName="TO PAGE" color="grey" /></Link> : null }
         </div>
      </div>
   )
}






// if (active === true) {
//    let hideSecondWrapper = '';
//    let hideBtn = '';
//    let pageNumber = '168';
//    const rezult = searchRezult;
//    let value = '';
//    let showOrHideBtn = "btn btn-grey";
//    let textColor = '';
// //I described in here, how you must apply the class an object and change value in the window where objects was render
//    if(primaryForm === 'primary') {
//       hideSecondWrapper = ' hide-info'
//    }

//    if (errorValidate.stateErrorValid) {
//       value = `${errorValidate.nameErrorValid}`;
//       textColor = 'search-form__rezult-info--red'
//       hideBtn = 'hide-info';
//    }
//    // if (rezult === 'found') {
//    //    showOrHideBtn = "hide-info"
//    //    value = `There is! Visit ${pageNumber} page?`
//    //    textColor = 'search-form__rezult-info--green';
//    // }
//    if (rezult === 'not found') {
//       value = 'The character was not found. Check the name and try again';
//       textColor = 'search-form__rezult-info--red';
//       hideBtn = 'hide-info';
//    }
//    return (
//       <form className="search-form lighting-border">
//          <p className="searc-form__action-label">Or find a character by name:</p>
//             <div className='search-form__wrapper'>
//             <input type="text" className="search-form__field" placeholder='Enter name' value={inputData} onChange={enterringData} />
//             <Button btnName="FIND" color="brown" onClick={(e) => validate(e, inputData)} />
//             </div>
//             <div className={`search-form__wrapper search-form__wrapper--space-between ${hideSecondWrapper}`}>
//                <p className={`search-form__rezult-info ${textColor}`}>{value}</p>
//                   <Button btnName="TO PAGE" color="grey" className={hideBtn}/>
//             </div>
//       </form>
