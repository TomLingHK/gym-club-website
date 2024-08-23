import './FeedbackContainer.scss'

function FeedbackContainer({ highlightContent, content, person, id }) {
    return (
        <div className='feedbackContainer'>
            <div className='txt'>
                <div className='highlightContainer'>
                    <h1 className='openQuotationMark'>
                        “
                    </h1>
                    <h3 className='highlightContent'>
                        { highlightContent }
                    </h3>
                    <h1 className='closeQuotationMark'>
                        ”
                    </h1>
                </div>      
                <div className='content'>
                    { content }
                </div>
                <div className='name'>
                    - { person }
                </div>
            </div>
            <img src={`./images/${id}_img.jpg`} alt="Happy person" className='img' />
        </div>
    )
}

export default FeedbackContainer;