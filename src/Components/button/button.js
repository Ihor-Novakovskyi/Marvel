import './button.css';
import trLeft from './triangle.svg';
import trRight from './triangle_1.svg';
import trLeftBl from './triangle-left.svg';
import trRightBl from './triangle-right.svg';
 


export default function Button({btnName, color, angle = 'white', className, disabled = false, style, ...props}) {
    let left = trLeft;
    let right = trRight;
    if (color === 'brown') {
        if (angle === 'black') {
            left = trLeftBl;
            right = trRightBl;
        }
      
     return (
            <button  
                {...props} 
                className={`btn btn-brown ${className ? className : ''}`}
                style={{...style, ...(disabled ? {opacity: '50%', transform: 'none'} : {}), }}
            >
                <img src={left} className='triangle-top-left'></img>
                <img src={right} className='triangle-bottom-right'></img>
                {btnName}
            </button>
        );
    }

    if (color === 'grey') {
        return  (
            <button 
            {...props} 
            className={`btn btn-grey ${className}`}
            style={{...style, ...(disabled ? {opacity: '50%', transform: 'none'} : {}), }}
            >
                <img src={left} className='triangle-top-left'></img>
                <img src={right} className='triangle-bottom-right'></img>
                {btnName}
            </button>
        )   
    } 
}
