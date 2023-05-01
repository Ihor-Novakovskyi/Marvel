import './button.css';
import trLeft from './triangle.svg';
import trRight from './triangle_1.svg';
import trLeftBl from './triangle-left.svg';
import trRightBl from './triangle-right.svg';
 


export default function Button({btnName, color, style = null, angle = 'white', ...props}) {
    console.log(props)
    let left = trLeft;
    let right = trRight;
    if (color === 'brown') {
        if (angle === 'black') {
            left = trLeftBl;
            right = trRightBl;
        }
        return (
            <button style={{...style}} {...props} className={`btn btn-brown ${props.className ? props.className : ''}`}>
                <img src={left} className='triangle-top-left'></img>
                <img src={right} className='triangle-bottom-right'></img>
                {btnName}
            </button>
        );
    }

    if (color === 'grey') {
        return  (
            <button style={{...style}} {...props} className={`btn btn-grey ${props.className}`}>
                <img src={left} className='triangle-top-left'></img>
                <img src={right} className='triangle-bottom-right'></img>
                {btnName}
            </button>
        )   
    } 
}
