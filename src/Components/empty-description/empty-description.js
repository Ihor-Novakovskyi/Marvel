import './empty-description.css';

export default function EmptyCharacterDescription() {
    return (
        <div className='description lighting-border'>
            <p className='description__empty-label'>Please select a character to see information</p>
            <div className="description__empty-wrapper blinking">
                <div className="description__empty-img-item "></div>
                <div className="description__empty-child "></div>
            </div>
            <div className="description__empty-item blinking"></div>
            <div className="description__empty-item blinking"></div>
            <div className="description__empty-item blinking"></div>
        </div>
    )
}

