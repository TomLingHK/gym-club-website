import './PricingSection.scss';

import PlanContainer from '../../components/PlanContainer/PlanContainer';

function PricingSection() {
    const pricingInfo = [
        { title: 'Basic', price: '$19.9', description: 'Enjoy basic facilities including gym room, yoga room and sauna room!', item: ['Gym room', 'Yoga Room', 'Table tennis Room', 'Snooker Room'] },
        { title: 'Gold', price: '$49.9', description: 'Enjoy more facilities with more privilege!', item: ['Gym room', 'Yoga Room', 'Table tennis Room', 'Snooker Room', 'Mini golf centre', 'High priority queue'] },
        { title: 'Premium', price: '$89.9', description: 'Enjoy all facilities with top privilege!', item: ['Gym room', 'Yoga Room', 'Table tennis Room', 'Snooker Room', 'Mini golf centre', 'Sauna Room', 'Massaging Service', 'Highest priority queue', '24/7 Private Customer Support'] },
    ]

    return (
        <section className='pricingSection scroll-checkpoint'>
            <h1 className='mainTitle'>Pricing</h1>
            <div className='plansContainer'>
                {pricingInfo.map( ({ title, price, description, item }) => 
                    <PlanContainer key={title} title={title} price={price} description={description} item={item}/>
                )}
            </div>
        </section>
    )
}

export default PricingSection;