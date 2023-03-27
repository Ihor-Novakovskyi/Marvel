import './character-search.css';
import { Component } from 'react';

export default class CharactersSearch extends Component {
   render() {
      if(this.props.active === true) {
      let startStateForm = '';
      let hideSecondWrapper = '';
      let hideBtn = '';
      let pageNumber = '168';
      const rezult = this.props.searchRezult;
      let value = '';
      let showOrHideBtn = "btn btn-grey";
      let textColor = '';
//this container i describe how i must apply my class to object and change value in the window where objects was render 
      if(this.props.primaryForm === 'primary') {
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
                  <button className="search-form__btn btn btn-brown search-form__btn-brown--mr-bottom">
                     <img src='./image/triangle.svg' className='triangle-top-left'></img>
                     <img src='./image/triangle_1.svg' className='triangle-bottom-right'></img>
                     FIND
                  </button>
               </div>
               <div className={`search-form__wrapper search-form__wrapper--space-between ${hideSecondWrapper}`}>
                  <p className={`search-form__rezult-info ${textColor}`}>{value}</p>
                  <button className={`btn btn-grey ${hideBtn}`}>
                     <img src='./image/triangle.svg' className='triangle-top-left'></img>
                     <img src='./image/triangle_1.svg' className='triangle-bottom-right'></img>
                     TO PAGE
                  </button>
               </div>
         </form>
      )
      }      
   }
}