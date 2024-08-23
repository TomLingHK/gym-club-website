import { useEffect, useState } from 'react';
import './FeedbackContainer.scss'

function FeedbackContainer({ highlightContent, content, person, id }) {
    const [fading, setFading] = useState(false);
    let timeoutID = undefined;

    useEffect(() => {
        clearTimeout(timeoutID);
        timeoutID = undefined;
        setFading(true);

        timeoutID = setTimeout(() => {
            setFading(false);
        }, 1000);
    }, [id])

    return (
        <div className={'feedbackContainer '}>
            <div className='txt'>
                <div className='highlightContainer'>
                    <h1 className='openQuotationMark'>
                        “
                    </h1>
                    <h3 className={'highlightContent' + (fading ? ' fading' : '')}>
                        { highlightContent }
                    </h3>
                    <h1 className='closeQuotationMark'>
                        ”
                    </h1>
                </div>      
                <div className={'content ' + (fading ? 'fading' : '')}>
                    { content }
                </div>
                <div className={'name ' + (fading ? 'fading' : '')}>
                    - { person }
                </div>
            </div>
            <img src={`./images/people/${id}_img.jpg`} alt="Happy person" className={'img ' + (fading ? 'fading' : '')} />
        </div>
    )
}

export default FeedbackContainer;