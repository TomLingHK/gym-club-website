import { useState } from 'react';
import { useInView } from "react-intersection-observer";
import './FeedbackSection.scss';

import FeedbackContainer from '../../components/FeedbackContainer/FeedbackContainer';
import FeedbackThumbnail from '../../components/FeedbackThumbnail/FeedbackThumbnail';

function FeedbackSection() {
    const [curIndex, setCurIndex] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.28,
    });

    const feedbackData = [
        {
            highlightContent: 'Top-notch facilities',
            content: 
            `
                The top-notch facilities at your gym center have exceeded my expectations. 
                From state-of-the-art equipment to well-maintained amenities, every visit feels like a premium experience. 
                The attention to detail in providing quality resources for workouts is truly commendable. 
                Thank you for creating a space where fitness goals are not just met but exceeded.
            `,
            person: 'Elizabeth Watson',
            id: 'elizabethWatson'
        },
        {
            highlightContent: 'Large space and good privacy.',
            content: 
            `
                I am highly impressed by the spaciousness and privacy offered at your gym center. 
                The ample room to move freely and the secluded areas for focused workouts truly enhance the overall experience. 
                It's a rare gem to find such a welcoming and private environment for fitness enthusiasts like me.
            `,
            person: 'Bill Benjamin',
            id: 'billBenjamin'
        },
        {
            highlightContent: 'I lost 5kg in three months!',
            content: 
            `
                I have always been a person who lacks discipline and would like to lose weight. 
                By following my coach's strict plan, I was able to lost 5kg in three months!
                Shout out to my coach Mike Miller who is helpful and has professional coaching experience for years.
            `,
            person: 'Kitty Kramer',
            id: 'kittyKramer'
        },
        {
            highlightContent: 'Fits my schedule!',
            content: 
            `
                The flexible time slots at your gym center have truly transformed my fitness routine. 
                Being able to seamlessly fit workouts into my busy schedule is a game-changer. 
                The variety of timing options ensures that staying active is convenient and stress-free. 
                Thank you for making it so easy to prioritize my health and well-being.
            `,
            person: 'James Collin',
            id: 'jamesCollin'
        },
    ];
    const { highlightContent, content, person, id } = feedbackData[curIndex];

    return (
        <section ref={ref} className={'feedbackSection scroll-checkpoint'}>
            {inView && <img className='bg' src="./images/feedback_img.jpg" alt="beautiful_woods" />}
            <h1 className='mainTitle'>User Reviews</h1>
            <FeedbackContainer highlightContent={ highlightContent } content={ content } person={ person } id={id} />
            <div className='feedbackThumbnailContainer'>
                {feedbackData.map((item, index) => 
                    <FeedbackThumbnail key={index} index={index} setCurIndex={setCurIndex} id={item.id} />
                )}
            </div>
        </section>
    )
}

export default FeedbackSection;