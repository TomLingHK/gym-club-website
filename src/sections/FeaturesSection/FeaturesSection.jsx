import './FeaturesSection.scss'

function FeaturesSection() {
    return (
        <section className='featuresSection'>
            <h1 className='mainTitle'>
                Why Us?
            </h1>
            <div className='featureContainer'>
                <div className='img'>
                </div>
                <div className='text'>
                    <h1 className='title'>
                        Safety first
                    </h1>
                    <div className='description'>
                        We provide professional trainers for every classes. Providing you a fruitful experience to learn in a correct manner. Follow our trainers' instructions to learn safely.
                    </div>
                    <div className='btn moreBtn'>
                        More
                    </div>
                </div>
            </div>

            <div className='featureContainer'>
                <div className='img'>
                </div>
                <div className='text'>
                    <h1 className='title'>
                        Flexible schedule
                    </h1>
                    <div className='description'>
                        Feel free to join any sections of classes every week. Arrange your time more effectively.
                    </div>
                    <div className='btn moreBtn'>
                        More
                    </div>
                </div>
            </div>

            <div className='featureContainer'>
                <div className='img'>
                </div>
                <div className='text'>
                    <h1 className='title'>
                        100+ classes
                    </h1>
                    <div className='description'>
                        We provide 100+ classes from begginer to advanced level. Gym, yoga, HIIT and sports you have never heard of. Check out what classes we provide!
                    </div>
                    <div className='btn moreBtn'>
                        More
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;