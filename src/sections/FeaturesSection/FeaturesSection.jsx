import FeatureContainer from '../../components/FeatureContainer/FeatureContainer';
import './FeaturesSection.scss'

function FeaturesSection() {
    const featureInfo = [
        { id: 'feature1', title: 'Safety first', description: 'We provide professional trainers for every classes. Providing you a fruitful experience to learn in a correct manner. Follow our trainers\' instructions to learn safely.' },
        { id: 'feature2', title: 'Flexible schedule', description: 'There are at least three time slots for each class every week. Feel free to join any section every week. Arrange your time more effectively.' },
        { id: 'feature3', title: '100+ classes', description: 'We provide 100+ classes from beginner to advanced level. Gym, yoga, HIIT and sports you have perhaps never heard of. Check out what classes we provide!' },
    ];

    return (
        <section className='featuresSection'>
            <h1 className='mainTitle'>
                Why Us?
            </h1>
            <div className='featuresContainer'>
                {featureInfo.map(({ id, title, description }) => 
                    <FeatureContainer key={id} id={id} title={title} description={description} />
                )}
            </div>
        </section>
    )
}

export default FeaturesSection;