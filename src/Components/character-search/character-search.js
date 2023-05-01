import './character-search.css';
import { Component } from 'react';
import Button from '../button/button';

export default function CharactersSearch({active, primaryForm, searchRezult}) {
   if (active === true) {
      let hideSecondWrapper = '';
      let hideBtn = '';
      let pageNumber = '168';
      const rezult = searchRezult;
      let value = '';
      let showOrHideBtn = "btn btn-grey";
      let textColor = '';
   //I described in here, how you must apply the class an object and change value in the window where objects was render 
      if(primaryForm === 'primary') {
         hideSecondWrapper = ' hide-info'
      }

      if (rezult === 'error') {
         value = 'This field is required';
         textColor = 'search-form__rezult-info--red'
         hideBtn = 'hide-info';
      }
      if (rezult === 'found') {
         showOrHideBtn = "hide-info"
         value = `There is! Visit ${pageNumber} page?`
         textColor = 'search-form__rezult-info--green';
      }
      if (rezult === 'not found') {
         value = 'The character was not found. Check the name and try again';
         textColor = 'search-form__rezult-info--red';
         hideBtn = 'hide-info';
      }
      return (
         <form className="search-form lighting-border">
            <p className="searc-form__action-label">Or find a character by name:</p>
               <div className='search-form__wrapper'>
                  <input type="text" className="search-form__field" placeholder='Enter name' />
                  <Button btnName="FIND"color="brown"/>
               </div>
               <div className={`search-form__wrapper search-form__wrapper--space-between ${hideSecondWrapper}`}>
                  <p className={`search-form__rezult-info ${textColor}`}>{value}</p>   
                     <Button btnName="TO PAGE" color="grey" className={hideBtn}/>
               </div>
         </form>
      )
   }       
}


