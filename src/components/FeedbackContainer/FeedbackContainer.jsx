import './FeedbackContainer.scss'

function FeedbackContainer({ highlightContent, content, person }) {
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
            <div className='img'>

            </div>
        </div>
    )
}

export default FeedbackContainer;