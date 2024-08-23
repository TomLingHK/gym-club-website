import './FeaturesSection.scss'
import { useEffect } from 'react';
import { useInView } from "react-intersection-observer";

import FeatureContainer from '../../components/FeatureContainer/FeatureContainer';

function FeaturesSection() {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const featureInfo = [
        { id: 'feature1', title: 'Safety first', 
          description: `
            We provide professional trainers for every classes. Providing you a fruitful experience to learn in a correct manner. 
            Not only a coach can help you to learn safely, but also help achieving your goal! Check out our talented 20+ coaches.
          ` 
        },
        { id: 'feature2', title: 'Flexible schedule', 
          description: `
            There are at least three time slots for each class every week. Feel free to join any section every week. Arrange your time more effectively.
            View schedule for individual classes by clicking More.
          ` 
        },
        { id: 'feature3', title: '100+ classes', 
          description: `
            We provide 100+ classes from beginner to advanced level. Gym, yoga, HIIT and sports you have perhaps never heard of. 
            Check out the classes we provide categorized by work out, yoga, water sports and more!
          `
        },
    ];

    useEffect(() => {
        const video = document.getElementById('featuresVideo');
        if (inView) video.play();
        else video.pause();
    }, [inView])


    return (
        <section ref={ref} className={'featuresSection ' + (inView ? 'active' : '')}>
            <video autoPlay muted loop id="featuresVideo">
                <source src="./videos/features_bg_vid.mp4" type="video/mp4" />
            </video>
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