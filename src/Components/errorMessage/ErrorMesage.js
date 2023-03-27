
import './ErrorMessage.css';
const ErrorMessage = (props) => {
    let style = {};
    if(props.style) {
        style = props.style;
    }
    return (
        <div className="message-error" style={style}>
            <img src="image/error.gif" alt="error" className="message-error__item" />
        </div>
    )
}
export default ErrorMessage;