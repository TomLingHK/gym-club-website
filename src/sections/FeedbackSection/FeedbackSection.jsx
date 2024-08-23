import { useState } from 'react';
import './FeedbackSection.scss';

import FeedbackContainer from '../../components/FeedbackContainer/FeedbackContainer';
import FeedbackThumbnail from '../../components/FeedbackThumbnail/FeedbackThumbnail';

function FeedbackSection() {
    const [curIndex, setCurIndex] = useState(0);

    const feedbackData = [
        {
            highlightContent: 'I lost 5kg in three months!',
            content: 
            `
                I have always been a person who lacks discipline and would like to lose weight. By following my coach's strict plan, I was able to lost 5kg in three months!
                Shout out to my coach Mike Miller who is helpful and has professional coaching experience for years.
            `,
            person: 'Kitty Kramer',
            id: 'kittyKramer'
        },
        {
            highlightContent: 'Large space and good privacy.',
            content: 
            `
                I have always been a person who lacks discipline and would like to lose weight. By following my coach's strict plan, I was able to lost 5kg in three months!
                Shout out to my coach Mike Miller who is helpful and has professional coaching experience for years.
            `,
            person: 'Bill Benjamin',
            id: 'billBenjamin'
        },
        {
            highlightContent: 'Fits my schedule!',
            content: 
            `
                I have always been a person who lacks discipline and would like to lose weight. By following my coach's strict plan, I was able to lost 5kg in three months!
                Shout out to my coach Mike Miller who is helpful and has professional coaching experience for years.
            `,
            person: 'James Collin',
            id: 'jamesCollin'
        },
        {
            highlightContent: 'Clean facilities!',
            content: 
            `
                I have always been a person who lacks discipline and would like to lose weight. By following my coach's strict plan, I was able to lost 5kg in three months!
                Shout out to my coach Mike Miller who is helpful and has professional coaching experience for years.
            `,
            person: 'Elizabeth Watson',
            id: 'elizabethWatson'
        },
    ];
    const { highlightContent, content, person, id } = feedbackData[curIndex];

    return (
        <section className={'feedbackSection scroll-checkpoint'}>
            <FeedbackContainer highlightContent={ highlightContent } content={ content } person={ person } />
            <div className='feedbackThumbnailContainer'>
                {feedbackData.map((picture, index) => 
                    <FeedbackThumbnail key={index} index={index} setCurIndex={setCurIndex} picture={picture} id={id} />
                )}
            </div>
        </section>
    )
}

export default FeedbackSection;