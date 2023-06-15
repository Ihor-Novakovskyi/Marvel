import imageError from './error.gif'
import './ErrorMessage.css';
const ErrorMessage = (props) => {
    let style = {};
    if (props.style) {
        style = props.style;
    }
    return (
        <div className='error-wrapper'>
            <div className="message-error" style={ style }>
                <img src={ imageError } alt="error" className="message-error__item" />
            </div>
            <div className='error-text'>{props.error}</div>
        </div>

    )
}
export default ErrorMessage;