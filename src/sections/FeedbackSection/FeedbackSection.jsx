import './FeedbackSection.scss';

function FeedbackSection() {
    return (
        <section className={'feedbackSection scroll-checkpoint'}>
            <div className='feedbackContainer'>
                <div className='txt'>
                    <div className='highlightContainer'>
                        <h2 className='openQuotationMark'>
                            “
                        </h2>
                        <h3 className='highlightContent'>
                            I lost 5kg in three months!
                        </h3>
                        <h2 className='closeQuotationMark'>
                            ”
                        </h2>
                    </div>      
                    <div className='content'>
                        I have always been a person who lacks discipline and would like to lose weight. By following my coach's strict plan, I was able to lost 5kg in three months!
                        Shout out to my coach Mike Miller who is helpful and has professional coaching experience for years.
                    </div>
                    <div className='name'>
                        - Kitty Kramer
                    </div>
                </div>
                <div className='img'>

                </div>
            </div>
        </section>
    )
}

export default FeedbackSection;