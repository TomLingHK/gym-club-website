import './PricingSection.scss';
import { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";

import PlanContainer from '../../components/PlanContainer/PlanContainer';

function PricingSection() {
    const [activePlan, setActivePlan] = useState('Premium');
    const { ref, inView } = useInView({
        threshold: 0.28,
    });

    useEffect(() => {
        const video = document.getElementById('pricingVideo');
        if (inView) video.play();
        else video.pause();
    }, [inView])

    const pricingInfo = [
        { title: 'Basic', price: '$19.9', description: 'Enjoy basic facilities including gym room, yoga room and sauna room!', item: ['Gym room', 'Yoga Room', 'Table tennis Room', 'Snooker Room'] },
        { title: 'Gold', price: '$49.9', description: 'Enjoy more facilities with more privilege!', item: ['Gym room', 'Yoga Room', 'Table tennis Room', 'Snooker Room', 'Mini golf centre', 'High priority queue'] },
        { title: 'Premium', price: '$89.9', description: 'Enjoy all facilities with top privilege!', item: ['Gym room', 'Yoga Room', 'Table tennis Room', 'Snooker Room', 'Mini golf centre', 'Sauna Room', 'Massaging Service', 'Highest priority queue', '24/7 Customer Support'] },
    ]

    return (
        <section ref={ref} className={'pricingSection scroll-checkpoint ' + (inView ? 'active' : '')}>
            <video autoPlay muted loop id="pricingVideo">
                <source src="./videos/pricing_bg_vid.mp4" type="video/mp4" />
            </video>
            <div className='pricingContainer'>
                <h1 className='mainTitle'>Pricing</h1>
                <div className='plansContainer'>
                    {pricingInfo.map( ({ title, price, description, item }) => 
                        <PlanContainer key={title} title={title} price={price} description={description} item={item} activePlan={activePlan} setActivePlan={setActivePlan}/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default PricingSection;