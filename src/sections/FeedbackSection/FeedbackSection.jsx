import { useState } from 'react';

import FeedbackContainer from '../../components/FeedbackContainer/FeedbackContainer';
import './FeedbackSection.scss';

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
            person: 'Kitty Kramer'
        },
    ]

    return (
        <section className={'feedbackSection scroll-checkpoint'}>
            <FeedbackContainer highlightContent={feedbackData[curIndex].highlightContent} content={feedbackData[curIndex].content} person={feedbackData[curIndex].person} />
        </section>
    )
}

export default FeedbackSection;