import './FeedbackContainer.scss'

function FeedbackContainer({ highlightContent, content, person }) {
    return (
        <div className='feedbackContainer'>
            <div className='txt'>
                <div className='highlightContainer'>
                    <h2 className='openQuotationMark'>
                        “
                    </h2>
                    <h3 className='highlightContent'>
                        { highlightContent }
                    </h3>
                    <h2 className='closeQuotationMark'>
                        ”
                    </h2>
                </div>      
                <div className='content'>
                    { content }
                </div>
                <div className='name'>
                    - { person }
                </div>
            </div>
            <div className='img'>

            </div>
        </div>
    )
}

export default FeedbackContainer;