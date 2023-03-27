import './empty-description.css';

export default function EmptyCharacterDescription() {
    return (
        <div className='description lighting-border'>
            <p className='description__empty-label'>Please select a character to see information</p>
            <div className="description__emty-wrapper">
                <div className="description__emty-img-item"></div>
                <div className="description__emty-child"></div>
            </div>
            <div className="description__emty-item"></div>
            <div className="description__emty-item"></div>
            <div className="description__emty-item"></div>
        </div>
    )
}